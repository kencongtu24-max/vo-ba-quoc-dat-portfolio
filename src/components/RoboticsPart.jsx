import { ArrowItem, ExperienceCallout, GoalCallout, Heading, PartHeader } from "./Blocks.jsx";
import { achievements, experience, goals, roboActivities, roboSkills } from "../data.js";

const MEDALS = { gold: "🥇", silver: "🥈", bronze: "🥉", encourage: "🏅" };

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
      <div className="n-levels">
        {achievements.map((g) => (
          <div className="n-level" key={g.level}>
            <h4 className="n-level-title">
              <span aria-hidden="true">{g.icon}</span> {g.level}
            </h4>
            <ul className="n-events">
              {g.events.map((e) => (
                <li className="n-event" key={e.name}>
                  <span className="n-event-name">{e.name}</span>
                  <span className="n-tags">
                    {e.awards.map((a) => (
                      <span className={`n-tag n-tier-${a.tier}`} key={a.title}>
                        <span aria-hidden="true">{MEDALS[a.tier]}</span> {a.title} · {a.count}
                      </span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Heading level={3}>Mục tiêu</Heading>
      <GoalCallout goal={goals.robo} />
    </section>
  );
}
