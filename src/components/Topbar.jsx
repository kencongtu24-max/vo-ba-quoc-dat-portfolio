const LABELS = { it: "CÔNG NGHỆ THÔNG TIN", robotics: "ROBOTICS" };

export default function Topbar({ view, onBack }) {
  if (view === "home") return null;
  return (
    <header className="topbar">
      <button className="back" onClick={onBack}>
        ← Trang chủ
      </button>
      <span className="crumb">{LABELS[view] ?? ""}</span>
    </header>
  );
}
