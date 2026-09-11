import { useEffect, useState } from "react";
import AuroraBackdrop from "./components/AuroraBackdrop.jsx";
import Topbar from "./components/Topbar.jsx";
import HomeView from "./components/HomeView.jsx";
import ITView from "./components/ITView.jsx";
import RoboticsView from "./components/RoboticsView.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

const VALID_VIEWS = new Set(["it", "robotics"]);

function readView() {
  const hash = (location.hash || "").replace("#", "");
  return VALID_VIEWS.has(hash) ? hash : "home";
}

export default function App() {
  const [view, setView] = useState(readView);

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
      <AuroraBackdrop view={view} />
      <div className="page">
        <Topbar view={view} onBack={() => navigate("home")} />
        <main>
          {view === "home" && <HomeView onNavigate={navigate} />}
          {view === "it" && <ITView />}
          {view === "robotics" && <RoboticsView />}
        </main>
      </div>
      <div className="page">
        <Footer />
      </div>
    </>
  );
}
