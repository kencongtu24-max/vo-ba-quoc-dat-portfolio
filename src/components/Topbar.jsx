import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle.jsx";

const LINKS = [
  { id: "gioi-thieu", label: "Giới thiệu" },
  { id: "it", label: "IT" },
  { id: "robotics", label: "Robotics" },
  { id: "lien-he", label: "Liên hệ" },
];

// Thin bar like Notion's page header: breadcrumb on the left, quick links and theme on the right.
export default function Topbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`n-topbar ${scrolled ? "is-scrolled" : ""}`}>
      <a className="n-crumb" href="#top">
        <span aria-hidden="true">💼</span> Võ Bá Quốc Đạt
      </a>
      <nav className="n-topnav" aria-label="Điều hướng chính">
        {LINKS.map((l) => (
          <a key={l.id} href={`#${l.id}`}>
            {l.label}
          </a>
        ))}
      </nav>
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    </header>
  );
}
