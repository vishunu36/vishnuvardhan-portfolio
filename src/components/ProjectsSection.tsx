import { ArrowUpRight, Braces } from "lucide-react";
import RevealArticle from "./RevealArticle";

const projects = [
  {
    title: "SS Cake Factory",
    category: "FREELANCE CLIENT PROJECT",
    description:
      "A live client storefront for browsing cakes and finding ordering and contact options.",
    tags: ["Client work", "Live website"],
    links: [
      {
        label: "Visit live site",
        href: "https://ayyappa-sn2h.vercel.app/",
        icon: ArrowUpRight,
      },
    ],
    featured: true,
  },
  {
    title: "Hybrid ML Intrusion Detection System",
    category: "MACHINE LEARNING · SECURITY",
    description:
      "A machine-learning intrusion detection pipeline that classifies network traffic as benign or malicious using supervised models.",
    tags: ["Python", "Random Forest", "XGBoost", "CICIDS2017"],
    links: [
      {
        label: "Source code",
        href: "https://github.com/vishunu36/Intelligent-IDS-Dashboard",
        icon: Braces,
      },
    ],
  },
  {
    title: "Suricata + ML Intrusion Detection",
    category: "CYBERSECURITY",
    description:
      "A hybrid intrusion-detection project described as combining Suricata and machine learning for threat detection and alerting.",
    tags: ["Suricata", "Machine learning"],
    links: [
      {
        label: "Source code",
        href: "https://github.com/vishunu36/Intelligent-ids-suricata",
        icon: Braces,
      },
    ],
  },
  {
    title: "Global Pest Control",
    category: "WEB DEVELOPMENT · 3D",
    description:
      "A Next.js service-site project with pest information, treatment-process content, and an interactive experience.",
    tags: ["Next.js", "TypeScript", "Three.js", "Motion"],
    links: [
      {
        label: "Source code",
        href: "https://github.com/vishunu36/global-pest-control",
        icon: Braces,
      },
    ],
  },
  {
    title: "Paradise Pest Control Services",
    category: "WEB DEVELOPMENT",
    description:
      "A service website project with service information, FAQs, and a WhatsApp enquiry flow described in its repository.",
    tags: ["React", "TypeScript", "Vite"],
    links: [
      {
        label: "Source code",
        href: "https://github.com/vishunu36/paradise-pest-control",
        icon: Braces,
      },
    ],
  },
  {
    title: "Local Market App",
    category: "PRODUCT DESIGN",
    description:
      "A Figma-based marketplace concept for browsing crops, placing orders, and connecting farmers with buyers.",
    tags: ["Figma", "UI/UX"],
    links: [
      {
        label: "Project details",
        href: "https://github.com/vishunu36/Local_Market_app",
        icon: Braces,
      },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section className="projects section-wrap" id="projects" aria-labelledby="projects-title">
      <div className="projects-heading">
        <div>
          <p className="eyebrow">05 <span aria-hidden="true">/</span> SELECTED WORK</p>
          <h2 id="projects-title">Projects built for <em>real-world use.</em></h2>
        </div>
        <a
          className="projects-github"
          href="https://github.com/vishunu36"
          target="_blank"
          rel="noreferrer"
        >
          More on GitHub <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
      <div className="projects-grid">
        {projects.map(({ title, category, description, tags, links, featured }, index) => (
          <RevealArticle
            className={`project-card${featured ? " project-card-featured" : ""}`}
            delay={Math.min(index * 0.06, 0.24)}
            key={title}
          >
            <div className="project-card-top">
              <span className="project-mark" aria-hidden="true">
                {featured ? "CLIENT" : "PROJECT"}
              </span>
              {featured && <span className="project-live"><i /> LIVE</span>}
            </div>
            <p className="project-category">{category}</p>
            <h3>{title}</h3>
            <p className="project-description">{description}</p>
            <ul className="project-tags" aria-label={`${title} technologies and type`}>
              {tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
            <div className="project-links">
              {links.map(({ label, href, icon: Icon }) => (
                <a href={href} key={href} target="_blank" rel="noreferrer">
                  {label} <Icon size={14} aria-hidden="true" />
                </a>
              ))}
            </div>
          </RevealArticle>
        ))}
      </div>
    </section>
  );
}
