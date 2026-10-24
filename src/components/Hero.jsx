import { roles } from "../data.js";
import MarqueeName from "./MarqueeName.jsx";

export default function Hero() {
  return (
    <div className="hero-top">
      <div className="hero-header">
        <span className="avatar-ring">
          <img src={`${import.meta.env.BASE_URL}avatar.jpg`} alt="Ảnh đại diện Võ Bá Quốc Đạt" loading="lazy" />
        </span>
        <div className="hero-info">
          <span className="hero-eyebrow">Trang cá nhân</span>
          {/* Real heading for accessibility/SEO; the marquee below is the animated, decorative version. */}
          <h1 className="sr-only">Võ Bá Quốc Đạt</h1>
          <MarqueeName text="Võ Bá Quốc Đạt" className="hero-name-text marquee-item" />
        </div>
      </div>
      <div className="roles">
        {roles.map((r) => (
          <div className={`role ${r.key}`} key={r.key}>
            <span className="dot" />
            {r.label}
          </div>
        ))}
      </div>
    </div>
  );
}
