import ThemeToggle from "./ThemeToggle.jsx";

const NAV_ITEMS = [
  { key: "it", label: "IT" },
  { key: "robotics", label: "Robotics" },
];

export default function Navbar({ view, onNavigate }) {
  return (
    <header className="navbar">
      <button
        type="button"
        className={`brand ${view === "home" ? "active" : ""}`}
        onClick={() => onNavigate("home")}
        aria-label="Về trang chủ"
      >
        <img className="brand-avatar" src="/avatar.jpg" alt="" />
        <span className="brand-name">Quốc Đạt</span>
      </button>

      <nav className="nav-pills" aria-label="Điều hướng chính">
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

      <ThemeToggle />
    </header>
  );
}
