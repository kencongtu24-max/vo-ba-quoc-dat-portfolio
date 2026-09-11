import SpotlightCard from "../content/SpotlightCard/SpotlightCard.jsx";
import Hero from "./Hero.jsx";

export default function HomeView({ onNavigate }) {
  const go = (view) => (e) => {
    e.preventDefault();
    onNavigate(view);
  };

  return (
    <section className="view view-home">
      <Hero />
      <div className="tiles">
        <a className="tile tile-it" href="#it" onClick={go("it")}>
          <SpotlightCard className="tile-body" spotlightColor="rgba(124, 140, 255, 0.35)">
            <span className="tile-icon">💻</span>
            <span className="tile-label">CÔNG NGHỆ THÔNG TIN</span>
            <span className="tile-sub">Kỹ năng, dự án &amp; mục tiêu phát triển</span>
            <span className="tile-arrow">Xem chi tiết →</span>
          </SpotlightCard>
        </a>
        <a className="tile tile-robo" href="#robotics" onClick={go("robotics")}>
          <SpotlightCard className="tile-body" spotlightColor="rgba(255, 157, 82, 0.35)">
            <span className="tile-icon">🤖</span>
            <span className="tile-label">ROBOTICS</span>
            <span className="tile-sub">Hoạt động, kỹ năng huấn luyện &amp; thành tích</span>
            <span className="tile-arrow">Xem chi tiết →</span>
          </SpotlightCard>
        </a>
      </div>
    </section>
  );
}
