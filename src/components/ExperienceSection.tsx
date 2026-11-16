import { BriefcaseBusiness } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section
      className="experience-section section-wrap"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="experience-section-heading">
        <p className="eyebrow">02 <span aria-hidden="true">/</span> EXPERIENCE</p>
        <h2 id="experience-title">Professional experience.</h2>
      </div>
      <article className="experience-entry">
        <span className="experience-icon">
          <BriefcaseBusiness size={19} aria-hidden="true" />
        </span>
        <div className="experience-entry-copy">
          <p className="card-kicker">TECHSTAR</p>
          <h3>Trainee Associate Engineer</h3>
        </div>
        <span className="experience-mark" aria-hidden="true">01</span>
      </article>
    </section>
  );
}
