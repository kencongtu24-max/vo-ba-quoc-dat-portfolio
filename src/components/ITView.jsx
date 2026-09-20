import SpotlightCard from "../content/SpotlightCard/SpotlightCard.jsx";
import Reveal from "./Reveal.jsx";
import { itSkills, itPersonalProjects, itTeamProjects } from "../data.js";

function ProjectGrid({ projects }) {
  if (projects.length === 0) {
    return (
      <Reveal>
        <SpotlightCard className="card" spotlightColor="rgba(124, 140, 255, 0.25)">
          <p>Coming soon...</p>
        </SpotlightCard>
      </Reveal>
    );
  }
  return (
    <div className="grid-cards">
      {projects.map((p, i) => (
        <Reveal className="grid-cards-item" key={p.title} delay={i * 0.06} y={18}>
          <SpotlightCard className="card" spotlightColor="rgba(124, 140, 255, 0.25)" tilt>
            <div className="card-head">
              <span className="card-index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="tag">{p.tag}</span>
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </SpotlightCard>
        </Reveal>
      ))}
    </div>
  );
}

export default function ITView() {
  return (
    <section className="view view-section view-it">
      <Reveal className="section-intro" y={16}>
        <span className="eyebrow">Information Technology</span>
        <h1>
          Information Technology Student
          <br />
          Aspiring Web &amp; Software Developer
        </h1>
        <p>Passionate about technology, building real-world products, and continually sharpening my programming mindset.</p>
      </Reveal>

      <Reveal className="block">
        <h2>Skills</h2>
        {itSkills.map((row) => (
          <div className="skill-row" key={row.cat}>
            <span className="skill-cat">{row.cat}</span>
            <div className="chip-wrap">
              {row.items.map((s) => (
                <span className="chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Reveal>

      <div className="block">
        <h2>Personal Projects</h2>
        <ProjectGrid projects={itPersonalProjects} />
      </div>

      <div className="block">
        <h2>Team Projects</h2>
        <ProjectGrid projects={itTeamProjects} />
      </div>

      <div className="block">
        <h2>Goals</h2>
        <Reveal>
          <SpotlightCard className="goal-box" spotlightColor="rgba(124, 140, 255, 0.25)">
            <p className="goal-tagline">Build. Learn. Innovate.</p>
            <p>Keep learning, level up my technical thinking, and turn ideas into real-world products.</p>
            <p>
              Focused on Web Development &amp; Software Engineering, aiming to become a professional Software
              Developer who is always ready to explore new technologies and create smart, efficient and valuable
              solutions.
            </p>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
}
