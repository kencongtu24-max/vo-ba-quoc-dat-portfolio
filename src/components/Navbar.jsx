import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle.jsx";

const NAV_ITEMS = [
  { key: "it", label: "IT" },
  { key: "robotics", label: "Robotics" },
];

export default function Navbar({ view, onNavigate, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <button
        type="button"
        className={`brand ${view === "home" ? "active" : ""}`}
        onClick={() => onNavigate("home")}
        aria-label="Go to home page"
      >
        <img className="brand-avatar" src={`${import.meta.env.BASE_URL}avatar.jpg`} alt="" />
        <span className="brand-name">Quốc Đạt</span>
      </button>

      <nav className="nav-pills" aria-label="Main navigation">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.key}
            type="button"
            className={`nav-pill ${view === item.key ? "active" : ""}`}
            aria-current={view === item.key ? "page" : undefined}
            onClick={() => onNavigate(item.key)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    </header>
  );
}
