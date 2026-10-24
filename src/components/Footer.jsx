import SpotlightCard from "../content/SpotlightCard/SpotlightCard.jsx";
import Reveal from "./Reveal.jsx";
import { contacts } from "../data.js";

const ICONS = {
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.3 21 3 13.7 3 4.7c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.9 5.34.9 11.6c0 5 3.24 9.24 7.75 10.74.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.15.68-3.81-1.52-3.81-1.52-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.51-.29-5.15-1.26-5.15-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16.91-.25 1.89-.38 2.86-.39.97 0 1.95.13 2.86.39 2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.35-2.64 5.31-5.16 5.59.41.36.77 1.06.77 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.62 10.62 0 0 0 23.1 11.6C23.1 5.34 18.27.5 12 .5z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.5 8.5h2V5.8c-.35-.05-1.54-.15-2.94-.15-2.9 0-4.9 1.77-4.9 5.02V13H6.5v3h2.66v7.7H12.7V16h2.55l.4-3H12.7v-1.98c0-.87.24-1.47 1.5-1.47z" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer>
      <span className="eyebrow">Liên hệ</span>
      <div className="contact-grid">
        {contacts.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.05} y={16}>
            <a
              className="contact-item"
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <SpotlightCard className="contact-body" spotlightColor="rgba(124, 140, 255, 0.2)">
                <span className="contact-icon">{ICONS[c.icon]}</span>
                <span className="contact-text">
                  <span className="contact-label">{c.label}</span>
                  <span className="contact-value">{c.value}</span>
                </span>
              </SpotlightCard>
            </a>
          </Reveal>
        ))}
      </div>
      <div className="footer-credit">
        <span>Võ Bá Quốc Đạt</span>
        <span className="mono">IT · Robotics</span>
      </div>
    </footer>
  );
}
