import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import TechLogo from "./TechLogo.jsx";
import { ICONS } from "./icons.jsx";
import { projectIcon } from "./ProjectGallery.jsx";

function Property({ label, children }) {
  return (
    <div className="n-prop">
      <span className="n-prop-label">{label}</span>
      <div className="n-prop-value">{children}</div>
    </div>
  );
}

function ExternalLink({ href, children }) {
  return (
    <a className="n-inline-link" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

// Icon, title and description; laid over the cover when the project has one.
function PeekHeading({ project }) {
  return (
    <>
      <span className="n-peek-icon" aria-hidden="true">
        {projectIcon(project)}
      </span>
      <h2 id="peek-title" className="n-peek-title">
        {project.title}
      </h2>
      <p className="n-peek-desc">{project.desc}</p>
    </>
  );
}

// Notion's "center peek": the project opens as a page over the main one.
export default function ProjectPeek({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.classList.add("is-locked");
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("is-locked");
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="n-peek-backdrop"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.article
            className="n-peek"
            role="dialog"
            aria-modal="true"
            aria-labelledby="peek-title"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="n-peek-bar">
              <span className="n-peek-crumb">Dự án / {project.title}</span>
              <button ref={closeRef} type="button" className="n-icon-btn" onClick={onClose} aria-label="Đóng">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </div>
            <div className="n-peek-scroll">
              {project.image && (
                <div className="n-peek-hero">
                  <img
                    className="n-peek-cover"
                    src={`${import.meta.env.BASE_URL}${project.image}`}
                    alt={`Ảnh giao diện ${project.title}`}
                    width="1280"
                    height="800"
                  />
                  <div className="n-cover-overlay n-peek-overlay">
                    <PeekHeading project={project} />
                  </div>
                </div>
              )}
              <div className="n-peek-body">
                {!project.image && <PeekHeading project={project} />}

                <div className="n-props">
                  <Property label="Loại">
                    <span className="n-tag">{project.tag}</span>
                  </Property>
                  <Property label="Trạng thái">
                    {project.link ? (
                      <span className="n-tag n-tag-live">Đang chạy trực tuyến</span>
                    ) : (
                      <span className="n-tag n-tag-muted">Chạy trên máy</span>
                    )}
                  </Property>
                  {project.link && (
                    <Property label="Website">
                      <ExternalLink href={project.link}>{new URL(project.link).host}</ExternalLink>
                    </Property>
                  )}
                  {project.repo && (
                    <Property label="Mã nguồn">
                      <ExternalLink href={project.repo}>
                        <span className="n-inline-icon">{ICONS.github}</span> GitHub
                      </ExternalLink>
                    </Property>
                  )}
                  <Property label="Công nghệ">
                    <div className="n-tags">
                      {project.tools.map((t) => (
                        <span className="n-tag n-tag-tech" key={t}>
                          <TechLogo name={t} />
                          {t}
                        </span>
                      ))}
                    </div>
                  </Property>
                </div>

                <h3 className="n-subheading">Chức năng</h3>
                <ul className="n-bullets">
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
