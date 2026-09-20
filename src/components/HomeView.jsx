import SpotlightCard from "../content/SpotlightCard/SpotlightCard.jsx";
import Hero from "./Hero.jsx";
import AboutInfo from "./AboutInfo.jsx";

export default function HomeView({ onNavigate }) {
  const go = (view) => (e) => {
    e.preventDefault();
    onNavigate(view);
  };

  return (
    <section className="view view-home">
      <Hero />
      <AboutInfo />
      <div className="tiles">
        <a className="tile tile-it" href="#it" onClick={go("it")}>
          <SpotlightCard className="tile-body" spotlightColor="rgba(124, 140, 255, 0.35)">
            <span className="tile-icon">💻</span>
            <span className="tile-label">INFORMATION TECHNOLOGY</span>
            <span className="tile-sub">Skills, projects &amp; development goals</span>
            <span className="tile-arrow">View details →</span>
          </SpotlightCard>
        </a>
        <a className="tile tile-robo" href="#robotics" onClick={go("robotics")}>
          <SpotlightCard className="tile-body" spotlightColor="rgba(255, 157, 82, 0.35)">
            <span className="tile-icon">🤖</span>
            <span className="tile-label">ROBOTICS</span>
            <span className="tile-sub">Activities, coaching skills &amp; achievements</span>
            <span className="tile-arrow">View details →</span>
          </SpotlightCard>
        </a>
      </div>
    </section>
  );
}
