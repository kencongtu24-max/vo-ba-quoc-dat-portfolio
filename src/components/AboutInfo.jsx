import SpotlightCard from "../content/SpotlightCard/SpotlightCard.jsx";
import Reveal from "./Reveal.jsx";
import { bio, aboutInfo } from "../data.js";

export default function AboutInfo() {
  return (
    <div className="about-block">
      <Reveal y={16}>
        <SpotlightCard className="goal-box about-bio" spotlightColor="rgba(124, 140, 255, 0.2)">
          <p>{bio}</p>
        </SpotlightCard>
      </Reveal>
      <div className="info-grid">
        {aboutInfo.map((item, i) => (
          <Reveal className="info-grid-item" key={item.label} delay={i * 0.05} y={16}>
            <SpotlightCard className="info-item" spotlightColor="rgba(124, 140, 255, 0.2)">
              <span className="info-icon">{item.icon}</span>
              <span className="info-text">
                <span className="info-label">{item.label}</span>
                <span className="info-value">{item.value}</span>
              </span>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
