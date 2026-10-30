import { Callout, Heading } from "./Blocks.jsx";
import { ICONS } from "./icons.jsx";
import { aboutInfo, contacts, education, fields, headline, roles } from "../data.js";

// Page header: portrait beside name, roles, intro and contacts; personal facts and the two fields below.
export default function Profile() {
  return (
    <>
      <section className="n-hero" id="gioi-thieu" aria-labelledby="page-title">
        <img
          className="n-avatar"
          src={`${import.meta.env.BASE_URL}avatar.jpg`}
          alt="Ảnh chân dung Võ Bá Quốc Đạt"
          width="560"
          height="700"
        />
        <div className="n-hero-body">
          <h1 className="n-title" id="page-title">
            Võ Bá Quốc Đạt
          </h1>
          <p className="n-roles-line">
            {roles.map((r) => (
              <a className="n-role" key={r.key} href={`#${r.target}`}>
                <span aria-hidden="true">{r.icon}</span> {r.label}
              </a>
            ))}
          </p>
          <p className="n-headline">{headline}</p>
          <div className="n-grid-2 n-contacts" id="lien-he">
            {contacts.map((c) => (
              <Callout key={c.label} icon={ICONS[c.icon]} href={c.href} className="n-callout-compact">
                <span className="n-sub">{c.label}</span>
                <span className="n-link-text">{c.value}</span>
              </Callout>
            ))}
          </div>
        </div>
      </section>

      <Heading>Thông tin</Heading>
      <div className="n-info-row">
        {aboutInfo.map((a) => (
          <Callout key={a.label} icon={a.icon} className="n-callout-compact">
            <span className="n-sub">{a.label}</span>
            {a.value}
          </Callout>
        ))}
        {education.map((e) => (
          <Callout key={e.title} icon="🎓" className="n-callout-compact n-info-wide">
            <span className="n-sub">Học vấn</span>
            {e.title}
            <span className="n-sub">{e.detail}</span>
          </Callout>
        ))}
      </div>

      <Heading hint="Hai lĩnh vực mình theo đuổi song song">Lĩnh vực</Heading>
      <div className="n-gallery n-gallery-fields">
        {fields.map((f) => (
          <a className="n-card n-card-field" key={f.title} href={`#${f.target}`}>
            <div className="n-card-cover n-card-cover-emoji" aria-hidden="true">
              {f.icon}
            </div>
            <div className="n-card-content">
              <span className="n-card-title">{f.title}</span>
              <span className="n-card-text">{f.desc}</span>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
