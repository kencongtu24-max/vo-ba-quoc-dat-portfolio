import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import AuroraBackdrop from "./components/AuroraBackdrop.jsx";
import Navbar from "./components/Navbar.jsx";
import HomeView from "./components/HomeView.jsx";
import ITView from "./components/ITView.jsx";
import RoboticsView from "./components/RoboticsView.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
import { useTheme } from "./hooks/useTheme.js";
import "./App.css";

const VALID_VIEWS = new Set(["it", "robotics"]);

function readView() {
  const hash = (location.hash || "").replace("#", "");
  return VALID_VIEWS.has(hash) ? hash : "home";
}

export default function App() {
  const [view, setView] = useState(readView);
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    const onHashChange = () => setView(readView());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const navigate = (next) => {
    location.hash = next === "home" ? "" : next;
    setView(next);
  };

  return (
    <>
      <AuroraBackdrop view={view} theme={theme} />
      <div className="page">
        <Navbar view={view} onNavigate={navigate} theme={theme} onToggleTheme={toggleTheme} />
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {view === "home" && <HomeView onNavigate={navigate} />}
              {view === "it" && <ITView />}
              {view === "robotics" && <RoboticsView />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
      <div className="page">
        <Footer />
      </div>
      <BackToTop />
    </>
  );
}
