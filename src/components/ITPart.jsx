import { ExperienceCallout, GoalCallout, Heading, PartHeader } from "./Blocks.jsx";
import ProjectGallery from "./ProjectGallery.jsx";
import TechLogo from "./TechLogo.jsx";
import { experience, goals, itSkills } from "../data.js";

export default function ITPart({ onOpenProject }) {
  return (
    <section className="n-part" aria-labelledby="it-title">
      <PartHeader
        id="it"
        icon="💻"
        title="Information Technology"
        titleId="it-title"
        desc="Aspiring Web & Software Developer — đam mê công nghệ, phát triển sản phẩm thực tế."
      />

      <Heading id="ky-nang" level={3}>
        Kỹ năng
      </Heading>
      <div className="n-gallery n-gallery-3">
        {itSkills.map((row) => (
          <div className="n-card" key={row.cat}>
            <div className="n-card-content">
              <span className="n-card-title">{row.cat}</span>
              <div className="n-tags">
                {row.items.map((s) => (
                  <span className="n-tag n-tag-tech" key={s}>
                    <TechLogo name={s} />
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Heading level={3}>Kinh nghiệm</Heading>
      <ExperienceCallout e={experience.it} />

      <ProjectGallery onOpen={onOpenProject} />

      <Heading level={3}>Mục tiêu</Heading>
      <GoalCallout goal={goals.it} />
    </section>
  );
}
