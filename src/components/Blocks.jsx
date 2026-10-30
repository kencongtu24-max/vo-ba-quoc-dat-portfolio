// Notion-style building blocks shared by every section.

// Big banner that opens one of the two fields (IT / Robotics).
export function PartHeader({ id, icon, title, titleId, desc }) {
  return (
    <header className="n-part-header" id={id}>
      <span className="n-part-icon" aria-hidden="true">
        {icon}
      </span>
      <div>
        <h2 className="n-part-title" id={titleId}>
          {title}
        </h2>
        <p className="n-hint">{desc}</p>
      </div>
    </header>
  );
}

export function Heading({ id, children, hint, level = 2 }) {
  const Tag = `h${level}`;
  return (
    <div className={`n-heading n-heading-${level}`} id={id}>
      <Tag>{children}</Tag>
      {hint && <p className="n-hint">{hint}</p>}
      <hr className="n-divider" />
    </div>
  );
}

export function Callout({ icon, children, href, className = "" }) {
  const body = (
    <>
      {icon && (
        <span className="n-callout-icon" aria-hidden="true">
          {icon}
        </span>
      )}
      <div className="n-callout-body">{children}</div>
    </>
  );
  if (!href) return <div className={`n-callout ${className}`}>{body}</div>;
  const external = href.startsWith("http");
  return (
    <a
      className={`n-callout n-callout-link ${className}`}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {body}
    </a>
  );
}

export function ArrowItem({ children }) {
  return (
    <p className="n-arrow-item">
      <span className="n-arrow" aria-hidden="true">
        →
      </span>
      {children}
    </p>
  );
}

// Icon, role and place are optional; without them only the bullet points show.
export function ExperienceCallout({ e }) {
  return (
    <Callout icon={e.icon}>
      {e.role && <strong>{e.role}</strong>}
      {e.place && <span className="n-sub">{e.place}</span>}
      <ul className="n-bullets">
        {e.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </Callout>
  );
}

export function GoalCallout({ goal }) {
  return (
    <Callout icon="🎯">
      <strong>{goal.tagline}</strong>
      <span>{goal.text}</span>
    </Callout>
  );
}
