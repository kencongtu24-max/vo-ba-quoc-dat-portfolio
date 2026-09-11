import SpotlightCard from "../content/SpotlightCard/SpotlightCard.jsx";
import Reveal from "./Reveal.jsx";
import { itSkills, itProjects } from "../data.js";

export default function ITView() {
  return (
    <section className="view view-section view-it">
      <Reveal className="section-intro" y={16}>
        <span className="eyebrow">Công nghệ thông tin</span>
        <h1>Sinh viên CNTT tại Đại học Đông Á</h1>
        <p>Sinh viên Công nghệ thông tin, định hướng trở thành Web Developer / Software Developer.</p>
      </Reveal>

      <Reveal className="block">
        <h2>Kỹ năng</h2>
        {itSkills.map((row) => (
          <div className="skill-row" key={row.cat}>
            <span className="skill-cat">{row.cat}</span>
            <div className="chip-wrap">
              {row.items.map((s) => (
                <span className="chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Reveal>

      <div className="block">
        <h2>Dự án</h2>
        <div className="grid-cards">
          {itProjects.map((p, i) => (
            <Reveal className="grid-cards-item" key={p.title} delay={i * 0.06} y={18}>
              <SpotlightCard className="card" spotlightColor="rgba(124, 140, 255, 0.25)">
                <span className="tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="block">
        <h2>Mục tiêu</h2>
        <Reveal>
          <SpotlightCard className="goal-box" spotlightColor="rgba(124, 140, 255, 0.25)">
            <p className="goal-tagline">Build. Learn. Innovate.</p>
            <p>Không ngừng học hỏi, nâng cấp tư duy công nghệ và biến ý tưởng thành những sản phẩm thực tế.</p>
            <p>
              Tập trung phát triển Web Development &amp; Software Engineering, hướng đến trở thành một Software
              Developer chuyên nghiệp, luôn sẵn sàng khám phá công nghệ mới và tạo ra những giải pháp thông minh, hiệu
              quả và có giá trị.
            </p>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
}
