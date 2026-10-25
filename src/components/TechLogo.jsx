import { getTechIcon } from "../techIcons.js";

// Brand logo for a technology name; nothing when no real logo exists.
export default function TechLogo({ name }) {
  const icon = getTechIcon(name);
  if (!icon) return null;
  return (
    <svg className="tool-logo" viewBox="0 0 24 24" aria-hidden="true" style={{ color: icon.color }}>
      <path d={icon.path} />
    </svg>
  );
}
