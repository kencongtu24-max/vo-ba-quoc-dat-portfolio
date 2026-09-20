import SpotlightCard from "../content/SpotlightCard/SpotlightCard.jsx";
import Reveal from "./Reveal.jsx";
import { roboSkills, roboActivities, roboExperience, achievements } from "../data.js";

export default function RoboticsView() {
  return (
    <section className="view view-section view-robotics">
      <Reveal className="section-intro" y={16}>
        <span className="eyebrow">Robotics</span>
        <h1>Robotics Instructor &amp; Competition Coach</h1>
        <p>Training and coaching robotics competition teams, from assembly and programming to match strategy.</p>
      </Reveal>

      <Reveal className="block">
        <h2>Skills</h2>
        <div className="chip-wrap">
          {roboSkills.map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="block">
        <h2>Activities</h2>
        <div className="activity-grid">
          {roboActivities.map((a, i) => (
            <Reveal className="activity-grid-item" key={a.label} delay={i * 0.05} y={16}>
              <SpotlightCard className="activity" spotlightColor="rgba(255, 157, 82, 0.25)">
                <span className="activity-icon">{a.icon}</span>
                <span className="activity-label">{a.label}</span>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="block">
        <h2>Teaching &amp; Coaching Experience</h2>
        <Reveal>
          <SpotlightCard className="exp-card" spotlightColor="rgba(255, 157, 82, 0.25)">
            <ul className="exp-list">
              {roboExperience.map((item, i) => (
                <li className="exp-item" key={i}>
                  {item}
                </li>
              ))}
            </ul>
          </SpotlightCard>
        </Reveal>
      </div>

      <div className="block">
        <h2>Achievements</h2>
        <div className="achv-list">
          {achievements.map((a, i) => (
            <Reveal key={`${a.title}-${i}`} delay={i * 0.05} y={14}>
              <SpotlightCard className={`achv achv-${a.tier}`} spotlightColor="rgba(255, 157, 82, 0.25)">
                <span className="achv-badge">{a.badge}</span>
                <div className="achv-body">
                  <div className="achv-title">{a.title}</div>
                  <div className="achv-desc">{a.desc}</div>
                </div>
                <span className="achv-count">{a.count}</span>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="block">
        <h2>Goals</h2>
        <Reveal>
          <SpotlightCard className="goal-box" spotlightColor="rgba(255, 157, 82, 0.25)">
            <p className="goal-tagline">Design. Program. Compete.</p>
            <p>
              Continually developing my skills in programming, designing and controlling robots, combining
              engineering thinking with real-world problem solving.
            </p>
            <p>
              Aiming to build smart, optimized and creative robots, while sharing knowledge and supporting
              students as they learn, create and take on Robotics competitions.
            </p>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
}
