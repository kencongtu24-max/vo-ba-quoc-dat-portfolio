import SpotlightCard from "../content/SpotlightCard/SpotlightCard.jsx";
import Reveal from "./Reveal.jsx";
import { itSkills, itPersonalProjects, itTeamProjects } from "../data.js";

function ProjectGrid({ projects }) {
  if (projects.length === 0) {
    return (
      <Reveal>
        <SpotlightCard className="card" spotlightColor="rgba(124, 140, 255, 0.25)">
          <p>Sắp ra mắt...</p>
        </SpotlightCard>
      </Reveal>
    );
  }
  return (
    <div className="grid-cards">
      {projects.map((p, i) => (
        <Reveal
          className={`grid-cards-item ${p.features ? "grid-cards-item-wide" : ""}`}
          key={p.title}
          delay={i * 0.06}
          y={18}
        >
          <SpotlightCard className="card" spotlightColor="rgba(124, 140, 255, 0.25)" tilt>
            <div className="card-head">
              <span className="card-index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="tag">{p.tag}</span>
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            {p.features && (
              <div className="card-section">
                <span className="card-section-label">Chức năng</span>
                <ul className="card-features">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            )}
            {p.tools && (
              <div className="card-section">
                <span className="card-section-label">Công cụ</span>
                <div className="card-tools">
                  {p.tools.map((t) => (
                    <span className="card-tool" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {p.link && (
              <a className="card-link" href={p.link} target="_blank" rel="noopener noreferrer">
                Xem website ↗
              </a>
            )}
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
        <span className="eyebrow">Công nghệ thông tin</span>
        <h1>
          Information Technology Student
          <br />
          Aspiring Web &amp; Software Developer
        </h1>
        <p>Đam mê công nghệ, phát triển sản phẩm thực tế và không ngừng nâng cao tư duy lập trình.</p>
      </Reveal>

      <Reveal className="block">
        <h2>Kỹ năng</h2>
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
        <h2>Dự án cá nhân</h2>
        <ProjectGrid projects={itPersonalProjects} />
      </div>

      <div className="block">
        <h2>Dự án nhóm</h2>
        <ProjectGrid projects={itTeamProjects} />
      </div>

      <div className="block">
        <h2>Mục tiêu</h2>
        <Reveal>
          <SpotlightCard className="goal-box" spotlightColor="rgba(124, 140, 255, 0.25)">
            <p className="goal-tagline">Build. Learn. Innovate.</p>
            <p>Không ngừng học hỏi, nâng cấp tư duy công nghệ và biến ý tưởng thành những sản phẩm thực tế.</p>
            <p>
              Tập trung phát triển Web Development &amp; Software Engineering, hướng đến trở thành một Software
              Developer chuyên nghiệp, luôn sẵn sàng khám phá công nghệ mới và tạo ra những giải pháp thông minh, hiệu
              quả và có giá trị.
            </p>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
}
