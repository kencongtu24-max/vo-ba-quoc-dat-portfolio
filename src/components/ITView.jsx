import { useState } from "react";
import SpotlightCard from "../content/SpotlightCard/SpotlightCard.jsx";
import Reveal from "./Reveal.jsx";
import { itSkills, itPersonalProjects, itTeamProjects } from "../data.js";
import TechLogo from "./TechLogo.jsx";

const FEATURE_PREVIEW = 3;
const TOOL_PREVIEW = 8;

const ArrowIcon = ({ dir = "up-right" }) => {
  const d = { "up-right": "M7 17 17 7M8 7h9v9", down: "M12 5v14m-6-6 6 6 6-6", up: "M12 19V5m-6 6 6-6 6 6" }[dir];
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d={d} />
    </svg>
  );
};

const GithubIcon = () => (
  <svg className="icon icon-fill" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 .5C5.73.5.9 5.34.9 11.6c0 5 3.24 9.24 7.75 10.74.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.15.68-3.81-1.52-3.81-1.52-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.51-.29-5.15-1.26-5.15-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16.91-.25 1.89-.38 2.86-.39.97 0 1.95.13 2.86.39 2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.35-2.64 5.31-5.16 5.59.41.36.77 1.06.77 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.62 10.62 0 0 0 23.1 11.6C23.1 5.34 18.27.5 12 .5z" />
  </svg>
);

function RepoLink({ repo }) {
  return (
    <a className="card-link" href={repo} target="_blank" rel="noopener noreferrer">
      <GithubIcon /> Mã nguồn
    </a>
  );
}

function ToolChip({ name }) {
  return (
    <span className="card-tool">
      <TechLogo name={name} />
      {name}
    </span>
  );
}

function ProjectShot({ p }) {
  const address = p.link ? new URL(p.link).host : `${p.title.toLowerCase().replace(/\s+/g, "")}.local`;
  const frame = (
    <>
      <div className="shot-bar" aria-hidden="true">
        <span className="shot-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="shot-url">{address}</span>
      </div>
      <div className="shot-img">
        <img
          src={`${import.meta.env.BASE_URL}${p.image}`}
          alt={`Ảnh giao diện ${p.title}`}
          loading="lazy"
          width="1280"
          height="720"
        />
      </div>
    </>
  );
  return (
    <div className="card-stage">
      {p.link ? (
        <a className="card-shot" href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`Mở website ${p.title}`}>
          {frame}
        </a>
      ) : (
        <div className="card-shot">{frame}</div>
      )}
    </div>
  );
}

function ProjectCard({ p, index }) {
  const [open, setOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const hiddenTools = p.tools ? p.tools.length - TOOL_PREVIEW : 0;
  const tools = p.tools && (toolsOpen || hiddenTools <= 0 ? p.tools : p.tools.slice(0, TOOL_PREVIEW));
  const hidden = p.features ? p.features.length - FEATURE_PREVIEW : 0;
  const features = p.features && (open ? p.features : p.features.slice(0, FEATURE_PREVIEW));
  const showcase = Boolean(p.image);
  const number = String(index + 1).padStart(2, "0");
  return (
    <SpotlightCard
      className={`card ${showcase ? "card-showcase" : ""} ${showcase && index % 2 ? "card-showcase-flip" : ""}`}
      spotlightColor="rgba(124, 140, 255, 0.18)"
      tilt={!showcase}
    >
      {showcase ? (
        <header className="card-head">
          <span className="card-index" aria-hidden="true">
            {number}
          </span>
          <div className="card-heading">
            <div className="card-meta">
              <span className="tag">{p.tag}</span>
              {p.link && (
                <span className="card-status">
                  <i aria-hidden="true" />
                  Đang chạy trực tuyến
                </span>
              )}
            </div>
            <h3>{p.title}</h3>
            <p className="card-desc">{p.desc}</p>
          </div>
        </header>
      ) : (
        <header className="card-head">
          <div className="card-meta">
            <span className="card-index" aria-hidden="true">
              {number}
            </span>
            <span className="tag">{p.tag}</span>
          </div>
          <h3>{p.title}</h3>
          <p className="card-desc">{p.desc}</p>
        </header>
      )}
      {showcase && <ProjectShot p={p} />}
      <div className="card-body">
        {features && (
          <ul className="card-features" aria-label="Chức năng">
            {features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        )}
        {hidden > 0 && (
          <button type="button" className="card-more" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            {open ? "Thu gọn" : `Thêm ${hidden} chức năng`} <ArrowIcon dir={open ? "up" : "down"} />
          </button>
        )}
        {p.tools && (
          <div className="card-tools" aria-label="Công cụ">
            {tools.map((t) => (
              <ToolChip key={t} name={t} />
            ))}
            {hiddenTools > 0 && (
              <button
                type="button"
                className="card-tool card-tool-more"
                aria-expanded={toolsOpen}
                aria-label={toolsOpen ? "Thu gọn công cụ" : `Xem thêm ${hiddenTools} công cụ`}
                title={toolsOpen ? "Thu gọn" : "Xem thêm"}
                onClick={() => setToolsOpen((o) => !o)}
              >
                {toolsOpen ? "−" : `+${hiddenTools}`}
              </button>
            )}
          </div>
        )}
        {(p.link || p.repo) && (
          <div className="card-actions">
            {p.link && (
              <a className="card-link" href={p.link} target="_blank" rel="noopener noreferrer">
                Xem website <ArrowIcon />
              </a>
            )}
            {p.repo && <RepoLink repo={p.repo} />}
          </div>
        )}
      </div>
    </SpotlightCard>
  );
}

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
  // Detailed projects get full-width cards; one-liners are grouped so they fill a row together.
  const featured = projects.filter((p) => p.features);
  const minor = projects.filter((p) => !p.features);
  return (
    <>
      {featured.length > 0 && (
        <div className="showcase-list">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={0.06} y={24}>
              <ProjectCard p={p} index={i} />
            </Reveal>
          ))}
        </div>
      )}
      {minor.length > 0 && (
        <>
          <h3 className="project-subhead">Dự án khác</h3>
          <div className="grid-cards grid-cards-minor">
            {minor.map((p, i) => (
              <Reveal className="grid-cards-item" key={p.title} delay={i * 0.06} y={18}>
                <ProjectCard p={p} index={featured.length + i} />
              </Reveal>
            ))}
          </div>
        </>
      )}
    </>
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
                <span className="chip chip-tech" key={s}>
                  <TechLogo name={s} />
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
