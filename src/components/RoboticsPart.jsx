import { ArrowItem, ExperienceCallout, GoalCallout, Heading, PartHeader } from "./Blocks.jsx";
import { achievements, experience, goals, roboActivities, roboSkills } from "../data.js";

export default function RoboticsPart() {
  return (
    <section className="n-part" aria-labelledby="robotics-title">
      <PartHeader
        id="robotics"
        icon="🤖"
        title="Robotics & STEM"
        titleId="robotics-title"
        desc="Robotics Instructor & Competition Coach — từ lắp ráp, lập trình đến chiến thuật thi đấu."
      />

      <div className="n-columns">
        <div className="n-column">
          <Heading level={3}>Kỹ năng</Heading>
          {roboSkills.map((s) => (
            <ArrowItem key={s}>{s}</ArrowItem>
          ))}
        </div>
        <div className="n-column">
          <Heading level={3}>Hoạt động</Heading>
          <ul className="n-plain-list">
            {roboActivities.map((a) => (
              <li key={a.label}>
                <span aria-hidden="true">{a.icon}</span> {a.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Heading level={3}>Kinh nghiệm giảng dạy &amp; huấn luyện</Heading>
      <ExperienceCallout e={experience.robo} />

      <Heading id="thanh-tich" level={3} hint="Thành tích các đội tuyển mình trực tiếp huấn luyện">
        Thành tích
      </Heading>
      <div className="n-table-wrap">
        <table className="n-table">
          <thead>
            <tr>
              <th scope="col">Giải</th>
              <th scope="col">Cuộc thi</th>
              <th scope="col">Số đội</th>
            </tr>
          </thead>
          <tbody>
            {achievements.map((a, i) => (
              <tr key={`${a.title}-${i}`}>
                <td>
                  <span className={`n-tag n-tier-${a.tier}`}>
                    <span aria-hidden="true">{a.badge}</span> {a.title}
                  </span>
                </td>
                <td>{a.desc}</td>
                <td className="n-table-num">{a.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Heading level={3}>Mục tiêu</Heading>
      <GoalCallout goal={goals.robo} />
    </section>
  );
}
