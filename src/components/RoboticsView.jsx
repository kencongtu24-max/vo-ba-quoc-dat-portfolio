import SpotlightCard from "../content/SpotlightCard/SpotlightCard.jsx";
import { roboSkills, roboActivities, achievements } from "../data.js";

export default function RoboticsView() {
  return (
    <section className="view view-section">
      <div className="section-intro">
        <span className="eyebrow">Robotics</span>
        <h1>Robotics Instructor &amp; Competition Coach</h1>
        <p>Đào tạo và huấn luyện các đội thi đấu robotics, từ lắp ráp, lập trình đến chiến thuật thi đấu.</p>
      </div>

      <div className="block">
        <h2>Kỹ năng</h2>
        <div className="chip-wrap">
          {roboSkills.map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="block">
        <h2>Hoạt động</h2>
        <div className="activity-grid">
          {roboActivities.map((a) => (
            <div className="activity" key={a}>
              {a}
            </div>
          ))}
        </div>
      </div>

      <div className="block">
        <h2>Thành tích</h2>
        <div className="achv-list">
          {achievements.map((a, i) => (
            <SpotlightCard
              className={`achv achv-${a.tier}`}
              spotlightColor="rgba(255, 157, 82, 0.25)"
              key={`${a.title}-${i}`}
            >
              <span className="achv-badge">{a.badge}</span>
              <div className="achv-body">
                <div className="achv-title">{a.title}</div>
                <div className="achv-desc">{a.desc}</div>
              </div>
              <span className="achv-count">{a.count}</span>
            </SpotlightCard>
          ))}
        </div>
      </div>

      <div className="block">
        <div className="goal-box">
          <span className="eyebrow">🤖 Mục tiêu</span>
          <p className="goal-tagline">Design. Program. Compete.</p>
          <p>
            Không ngừng phát triển kỹ năng lập trình, thiết kế và điều khiển robot, kết hợp tư duy kỹ thuật với khả năng
            giải quyết vấn đề trong thực tế.
          </p>
          <p>
            Hướng đến xây dựng những robot thông minh, tối ưu và sáng tạo, đồng thời chia sẻ kiến thức và đồng hành
            cùng học sinh trong quá trình học tập, sáng tạo và chinh phục các cuộc thi Robotics.
          </p>
        </div>
      </div>
    </section>
  );
}
