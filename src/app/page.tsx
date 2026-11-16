import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  Braces,
  Command,
  GraduationCap,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import ExperienceSection from "@/components/ExperienceSection";
import HeroParallax from "@/components/HeroParallax";
import InteractiveHero from "@/components/InteractiveHero";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectsSection";

const focusAreas = [
  {
    icon: Braces,
    title: "Software engineering",
    detail: "Java · Python · SQL · Full-stack",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    detail: "Network analysis · Penetration testing · Suricata",
  },
  {
    icon: Layers3,
    title: "Data & systems",
    detail: "Linux · RHEL · Couchbase · DB2",
  },
];

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#hero-title">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Back to top">
          <span className="wordmark-mark" aria-hidden="true">
            <Command size={17} strokeWidth={2} />
          </span>
          <span>ENGINEERING <span className="wordmark-divider">/</span> SECURITY</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#profile">Profile</a>
          <a href="#experience">Experience</a>
          <a href="#focus">Focus</a>
          <a href="#certifications">Certifications</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a
            className="nav-github"
            href="https://github.com/vishunu36"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <section className="hero section-wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="hero-name">Vishnuvardhan Kanneboina</p>
          <p className="eyebrow"><span className="status-dot" /> SOFTWARE <span aria-hidden="true">/</span> SECURITY <span aria-hidden="true">/</span> AI</p>
          <h1 id="hero-title" tabIndex={-1}>
            Building thoughtful software, <em>secured by design.</em>
          </h1>
          <p className="hero-summary">
            I work across software engineering, cybersecurity, and AI—bringing a
            systems-minded approach to the way technology is built and protected.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#profile">
              Explore my profile <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a
              className="button button-quiet"
              href="https://github.com/vishunu36"
              target="_blank"
              rel="noreferrer"
            >
              GitHub profile <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-note">
            <span className="hero-note-line" aria-hidden="true" />
            <span>Computer Science <span className="muted-separator">+</span> Cybersecurity</span>
          </div>
        </div>

        <HeroParallax>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <InteractiveHero />
          <div className="hero-core">
            <div className="core-glow" />
            <ShieldCheck className="core-shield" size={76} strokeWidth={1.15} />
            <span className="core-label">SECURE<br />BY DESIGN</span>
          </div>
          <span className="orbit-tag orbit-tag-top">01 <span>DEFEND</span></span>
          <span className="orbit-tag orbit-tag-bottom">02 <span>BUILD</span></span>
          <span className="art-coordinate">SECURITY / DATA / SYSTEMS</span>
          <span className="art-index">FIG. 01 <span>— SYSTEMS THINKING</span></span>
        </HeroParallax>
      </section>

      <div className="signal-strip" role="region" aria-label="Areas of expertise">
        <div className="signal-track">
          <span>SOFTWARE ENGINEERING</span><i />
          <span>CYBERSECURITY</span><i />
          <span>AI &amp; MACHINE LEARNING</span><i />
          <span>DATA SYSTEMS</span><i />
          <span>SOFTWARE ENGINEERING</span><i />
        </div>
      </div>

      <section className="profile section-wrap" id="profile" aria-labelledby="profile-title">
        <div className="section-heading">
          <p className="eyebrow">01 <span aria-hidden="true">/</span> PROFILE</p>
          <h2 id="profile-title">Technology is strongest when it is <em>thoughtfully built.</em></h2>
        </div>
        <div className="profile-grid">
          <div className="portrait-frame">
            <Image
              src="/profile-portrait.png"
              alt="Portrait of Vishnuvardhan Kanneboina"
              width={768}
              height={1024}
              sizes="(max-width: 700px) 78vw, 360px"
              className="portrait-image"
            />
            <span className="portrait-caption">ENGINEERING <span>×</span> SECURITY</span>
          </div>
          <div className="profile-copy">
            <p className="profile-lead">
              A computer science and cybersecurity background, paired with a
              curiosity for how software, infrastructure, and security fit together.
            </p>
            <p className="body-copy">
              My experience spans programming, database technologies, Linux
              environments, security tooling, and machine-learning-based security
              projects. I also work on full-stack development and client projects.
            </p>
            <div className="education-card">
              <span className="experience-icon"><GraduationCap size={18} aria-hidden="true" /></span>
              <div>
                <p className="card-kicker">EDUCATION</p>
                <div className="education-list">
                  <article>
                    <h3>B.Tech in Computer Science &amp; Engineering (Cybersecurity)</h3>
                    <p className="education-meta">CMR College of Engineering &amp; Technology, Hyderabad <span>2023–2026</span></p>
                  </article>
                  <article>
                    <h3>Diploma in Computer Science &amp; Engineering</h3>
                    <p className="education-meta">Vathsalya Institute of Science &amp; Technology, Bhongir <span>2020–2023</span></p>
                  </article>
                </div>
              </div>
            </div>
            <a className="text-link" href="#focus">
              Explore technical focus <ArrowDown size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <ExperienceSection />

      <section className="focus section-wrap" id="focus" aria-labelledby="focus-title">
        <div className="focus-heading">
          <div>
            <p className="eyebrow">03 <span aria-hidden="true">/</span> TECHNICAL FOCUS</p>
            <h2 id="focus-title">A broad toolkit.<br /><em>A security-first lens.</em></h2>
          </div>
          <p className="focus-intro">
            Tools and technologies from my software, infrastructure, database,
            and cybersecurity work.
          </p>
        </div>
        <div className="focus-grid">
          {focusAreas.map(({ icon: Icon, title, detail }, index) => (
            <article className="focus-card" key={title}>
              <div className="focus-card-top">
                <span className="focus-icon"><Icon size={20} strokeWidth={1.6} aria-hidden="true" /></span>
                <span className="focus-number">0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{detail}</p>
              <span className="focus-card-rule" aria-hidden="true" />
            </article>
          ))}
        </div>
        <div className="tooling-line">
          <span className="tooling-label">SECURITY TOOLING</span>
          <p>Wireshark <i /> Nmap <i /> Burp Suite <i /> Metasploit <i /> Suricata</p>
        </div>
      </section>

      <section
        className="certifications section-wrap"
        id="certifications"
        aria-labelledby="certifications-title"
      >
        <div className="certifications-heading">
          <div>
            <p className="eyebrow">04 <span aria-hidden="true">/</span> CERTIFICATIONS</p>
            <h2 id="certifications-title">Learning, <em>put into practice.</em></h2>
          </div>
        </div>
        <div className="certifications-grid">
          <article className="certification-card">
            <span className="certification-icon"><Award size={18} aria-hidden="true" /></span>
            <div>
              <h3>TCS iON Career Edge – Young Professional</h3>
              <p>Tata Consultancy Services <span>2025</span></p>
            </div>
          </article>
          <article className="certification-card">
            <span className="certification-icon"><Award size={18} aria-hidden="true" /></span>
            <div>
              <h3>Web Design &amp; Development</h3>
              <p>NSDC / Skill India Digital Hub <span>2025</span></p>
            </div>
          </article>
        </div>
      </section>

      <ProjectsSection />
      <ContactSection />

      <footer className="site-footer section-wrap">
        <a className="wordmark footer-wordmark" href="#top">
          <span className="wordmark-mark" aria-hidden="true"><Command size={17} strokeWidth={2} /></span>
          <span>ENGINEERING <span className="wordmark-divider">/</span> SECURITY</span>
        </a>
        <p>Built around systems, software, and security.</p>
        <a className="footer-link" href="https://github.com/vishunu36" target="_blank" rel="noreferrer">
          GitHub <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </footer>
    </main>
  );
}
