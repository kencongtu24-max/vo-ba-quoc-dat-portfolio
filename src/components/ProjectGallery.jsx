import { Heading } from "./Blocks.jsx";
import { itPersonalProjects, itTeamProjects } from "../data.js";

const TAG_ICONS = {
  "Ứng dụng AI": "🧠",
  "Ứng dụng quản lý": "🗂️",
  "Nền tảng học tập": "📚",
  "Website giới thiệu": "🌏",
};

export const projectIcon = (p) => TAG_ICONS[p.tag] || "📄";

function Cover({ p }) {
  if (!p.image) {
    return (
      <div className="n-card-cover n-card-cover-emoji" aria-hidden="true">
        {projectIcon(p)}
      </div>
    );
  }
  return (
    <div className="n-card-cover">
      <img src={`${import.meta.env.BASE_URL}${p.image}`} alt="" loading="lazy" width="1280" height="800" />
    </div>
  );
}

function ProjectCard({ p, onOpen }) {
  // Only projects with a feature list have a detail page to open.
  const detailed = Boolean(p.features);
  const content = (
    <>
      <Cover p={p} />
      <div className="n-card-content">
        <span className="n-card-title">
          <span aria-hidden="true">{projectIcon(p)}</span> {p.title}
        </span>
        <span className="n-card-text">{p.desc}</span>
        <div className="n-tags">
          <span className="n-tag">{p.tag}</span>
          {p.link && <span className="n-tag n-tag-live">Đang chạy trực tuyến</span>}
          {!detailed && <span className="n-tag n-tag-muted">Đang cập nhật</span>}
        </div>
      </div>
    </>
  );
  if (!detailed) return <div className="n-card n-card-static">{content}</div>;
  return (
    <button type="button" className="n-card" onClick={(e) => onOpen(p, e.currentTarget)} aria-haspopup="dialog">
      {content}
    </button>
  );
}

export default function ProjectGallery({ onOpen }) {
  // Detailed projects first so the gallery opens with real screenshots.
  const projects = [...itPersonalProjects].sort((a, b) => Boolean(b.features) - Boolean(a.features));
  return (
    <>
      <Heading id="du-an" level={3} hint="Bấm vào một dự án để xem chức năng và công nghệ">
        Dự án cá nhân
      </Heading>
      <div className="n-gallery n-gallery-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} onOpen={onOpen} />
        ))}
      </div>

      <Heading level={3}>Dự án nhóm</Heading>
      {itTeamProjects.length === 0 ? (
        <p className="n-empty">Sắp ra mắt...</p>
      ) : (
        <div className="n-gallery n-gallery-3">
          {itTeamProjects.map((p) => (
            <ProjectCard key={p.title} p={p} onOpen={onOpen} />
          ))}
        </div>
      )}
    </>
  );
}
