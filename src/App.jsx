import { useCallback, useEffect, useRef, useState } from "react";
import Topbar from "./components/Topbar.jsx";
import Profile from "./components/Profile.jsx";
import ITPart from "./components/ITPart.jsx";
import RoboticsPart from "./components/RoboticsPart.jsx";
import ProjectPeek from "./components/ProjectPeek.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
import { useTheme } from "./hooks/useTheme.js";
import "./App.css";

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const [project, setProject] = useState(null);
  const openerRef = useRef(null);

  // The page renders after the browser looks for the #anchor, so jump to it once mounted (e.g. a shared #robotics link).
  useEffect(() => {
    const id = decodeURIComponent(location.hash.slice(1));
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
  }, []);

  const openProject = useCallback((p, opener) => {
    openerRef.current = opener;
    setProject(p);
  }, []);

  const closeProject = useCallback(() => {
    setProject(null);
    openerRef.current?.focus();
  }, []);

  return (
    <>
      <Topbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="n-page" id="top">
        <Profile />
        <ITPart onOpenProject={openProject} />
        <RoboticsPart />
        <Footer />
      </main>
      <ProjectPeek project={project} onClose={closeProject} />
      <BackToTop />
    </>
  );
}
