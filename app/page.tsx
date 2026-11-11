import {
  ArrowDown,
  ArrowDownToLine,
  ArrowUp,
  ArrowUpRight,
  Braces,
  ChevronDown,
  CodeXml,
  Layers3,
  BriefcaseBusiness,
  MapPin,
  Sparkles,
  Waypoints,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Reveal } from "@/components/reveal";
import { ProjectDiagram } from "@/components/project-diagram";
import { CopyEmail } from "@/components/copy-email";
import {
  experience,
  expertise,
  person,
  principles,
  projects,
  type Project,
} from "@/content/portfolio";

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span className="label-line" />
      <span>{children}</span>
    </div>
  );
}

function ProjectContent({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article
      className={`project ${featured ? "project-featured" : ""}`}
      id={`project-${project.id}`}
    >
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="project-preview-link"
        aria-label={`Explore ${project.name} source on GitHub`}
      >
        <ProjectDiagram type={project.diagram} />
        <span className="preview-open">
          <ArrowUpRight size={17} />
        </span>
      </a>
      <div className="project-body">
        <div className="project-category">
          <span>
            {project.number} / {project.category}
          </span>
          <span className="project-status">{project.status}</span>
        </div>
        <div className="project-title-row">
          <h3>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </h3>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label={`${project.name} GitHub repository`}
          >
            <ArrowUpRight size={22} />
          </a>
        </div>
        <p className="project-description">{project.description}</p>
        {featured && <p className="project-contribution">{project.contribution}</p>}
        <div className="tags">
          {project.stack.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <details className="project-details">
          <summary>
            Engineering notes <ChevronDown size={14} />
          </summary>
          {!featured && <p>{project.contribution}</p>}
          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            Read the source <ArrowUpRight size={14} />
          </a>
        </details>
      </div>
    </article>
  );
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    url: person.url,
    jobTitle: person.role,
    description:
      "Senior software engineer working on enterprise applications, backend systems, and applied AI.",
    sameAs: [person.github, person.linkedin],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "University of Central Florida" },
      { "@type": "CollegeOrUniversity", name: "National Institute of Technology Delhi" },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main" tabIndex={-1}>
        <section className="hero" id="home" aria-labelledby="hero-heading">
          <div className="container hero-inner">
            <div className="hero-copy">
              <div className="eyebrow hero-eyebrow">
                <span className="small-line" /> SENIOR SOFTWARE ENGINEER · FULL-STACK & SYSTEMS
              </div>
              <p className="hero-name">Hi, I’m Yash.</p>
              <h1 id="hero-heading">
                Thoughtful
                <br />
                software.
                <br />
                <span>At every layer.</span>
              </h1>
              <p className="hero-description">
                From the interface to the infrastructure.
                <br className="desktop-break" /> I build full-stack applications, reliable backend
                systems, and AI workflows that do useful work.
              </p>
              <div className="hero-actions">
                <a href="#projects" className="button button-primary">
                  Explore my work <ArrowUpRight size={17} />
                </a>
                <a className="button button-text" href={person.resume} download>
                  Download résumé <ArrowDownToLine size={16} />
                </a>
              </div>
              <div className="hero-social">
                <a href={person.github} target="_blank" rel="noopener noreferrer">
                  <CodeXml size={16} /> GitHub <ArrowUpRight size={11} />
                </a>
                <span />
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                  <BriefcaseBusiness size={16} /> LinkedIn <ArrowUpRight size={11} />
                </a>
              </div>
            </div>
            <div className="hero-bottom">
              <a className="scroll-cue" href="#about">
                <span className="scroll-cue-icon">
                  <ArrowDown size={14} />
                </span>{" "}
                A little further down
              </a>
              <span className="hero-location">
                <MapPin size={13} /> Based in Dallas, Texas <span className="local-mark" />
              </span>
            </div>
          </div>
        </section>

        <div className="context-strip">
          <div className="container">
            <span>Built across different worlds.</span>
            <div>
              <span>Enterprise systems</span>
              <i />
              <span>Healthcare technology</span>
              <i />
              <span>Applied AI</span>
            </div>
          </div>
        </div>

        <section
          className="section about-section container"
          id="about"
          aria-labelledby="about-heading"
        >
          <Reveal>
            <SectionLabel number="01">The engineer behind the code</SectionLabel>
            <div className="about-layout">
              <h2 id="about-heading">
                A wider lens.
                <br />
                <span>A better system.</span>
              </h2>
              <div className="about-copy">
                <p className="lead">
                  I’m a senior software engineer who likes understanding how the pieces fit
                  together.
                </p>
                <p>
                  At Incedo, supporting Verizon, I build enterprise applications and backend
                  services that keep operational workflows moving. My work spans React and Next.js
                  interfaces, Java services, event-driven systems, and LLM-powered automation.
                </p>
                <p>
                  Previously, I built research software at Florida Space Institute and interoperable
                  healthcare applications at Medblocks. Different domains, the same focus: useful
                  software with clear foundations.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="focus-areas">
              <div>
                <Braces size={22} strokeWidth={1.3} />
                <span className="mono">01</span>
                <h3>
                  Full-stack
                  <br />
                  product engineering
                </h3>
              </div>
              <div>
                <Waypoints size={22} strokeWidth={1.3} />
                <span className="mono">02</span>
                <h3>
                  Backend &<br />
                  distributed systems
                </h3>
              </div>
              <div>
                <Sparkles size={22} strokeWidth={1.3} />
                <span className="mono">03</span>
                <h3>
                  Applied AI &<br />
                  workflow automation
                </h3>
              </div>
            </div>
          </Reveal>
          <div className="education">
            <span className="eyebrow">Foundations</span>
            <div>
              <span>M.S. Computer Science</span>
              <small>University of Central Florida · 2024</small>
            </div>
            <div>
              <span>B.Tech. Computer Science & Engineering</span>
              <small>National Institute of Technology Delhi · 2022</small>
            </div>
          </div>
        </section>

        <section
          className="section experience-section"
          id="experience"
          aria-labelledby="experience-heading"
        >
          <div className="container">
            <Reveal>
              <SectionLabel number="02">Where I’ve contributed</SectionLabel>
              <div className="section-heading">
                <h2 id="experience-heading">
                  Experience that
                  <br />
                  <span>goes beyond the screen.</span>
                </h2>
                <p>
                  Production systems. Real constraints.
                  <br />
                  Ownership across the stack.
                </p>
              </div>
            </Reveal>
            <div className="experience-list">
              {experience.map((job, index) => (
                <Reveal key={job.company}>
                  <details
                    className={`experience-item ${index === 0 ? "current-role" : ""}`}
                    open={index === 0}
                  >
                    <summary>
                      <div className="timeline-meta">
                        <span className="timeline-point" />
                        <span>{job.dates}</span>
                        <small>{job.location}</small>
                      </div>
                      <div className="role-heading">
                        <div className="company-row">
                          <h3>{job.company}</h3>
                          {index === 0 && <span className="role-current">Current</span>}
                        </div>
                        <span className="role-title">{job.role}</span>
                        <span className="company-context">{job.context}</span>
                      </div>
                      <span className="expand-icon">
                        <ChevronDown size={19} />
                      </span>
                    </summary>
                    <div className="experience-content">
                      <p>{job.overview}</p>
                      <ul>
                        {job.achievements.map((achievement) => (
                          <li key={achievement}>{achievement}</li>
                        ))}
                      </ul>
                      <div className="tags">
                        {job.stack.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section projects-section container"
          id="projects"
          aria-labelledby="projects-heading"
        >
          <Reveal>
            <SectionLabel number="03">Selected work</SectionLabel>
            <div className="section-heading">
              <h2 id="projects-heading">
                Built to understand.
                <br />
                <span>Built to work.</span>
              </h2>
              <a
                href={person.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                All repositories <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
          <Reveal>
            <ProjectContent project={projects[0]} featured />
          </Reveal>
          <div className="project-grid">
            {projects.slice(1).map((project) => (
              <Reveal key={project.id}>
                <ProjectContent project={project} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section skills-section" id="skills" aria-labelledby="skills-heading">
          <div className="container">
            <Reveal>
              <SectionLabel number="04">Technical toolkit</SectionLabel>
              <div className="section-heading">
                <h2 id="skills-heading">
                  The right tools.
                  <br />
                  <span>With a reason.</span>
                </h2>
                <p>
                  Production experience at the core.
                  <br />
                  Room to keep exploring.
                </p>
              </div>
            </Reveal>
            <div className="expertise-grid">
              {expertise.map((domain) => (
                <Reveal key={domain.number}>
                  <article className="expertise-domain">
                    <span className="domain-number">/{domain.number}</span>
                    <h3>{domain.title}</h3>
                    <p>{domain.description}</p>
                    <ul>
                      {domain.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section philosophy-section container"
          aria-labelledby="philosophy-heading"
        >
          <Reveal>
            <div className="philosophy-layout">
              <div>
                <SectionLabel number="05">How I work</SectionLabel>
                <h2 id="philosophy-heading">
                  Good engineering
                  <br />
                  is a series of
                  <br />
                  <span>thoughtful decisions.</span>
                </h2>
                <Layers3 className="philosophy-icon" size={44} strokeWidth={0.8} />
              </div>
              <div className="principles">
                {principles.map((principle, index) => (
                  <div className="principle" key={principle.title}>
                    <span className="mono">0{index + 1}</span>
                    <div>
                      <h3>{principle.title}</h3>
                      <p>{principle.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-heading">
          <div className="container">
            <Reveal>
              <SectionLabel number="06">Start a conversation</SectionLabel>
              <div className="contact-layout">
                <div>
                  <p className="contact-eyebrow">Have something in mind?</p>
                  <h2 id="contact-heading">
                    Let’s build
                    <br />
                    something <span>meaningful.</span>
                    <span className="contact-period">↗</span>
                  </h2>
                </div>
                <p>
                  I’m always interested in conversations about useful products, complex systems, and
                  the people building them.
                </p>
              </div>
              <div className="contact-bottom">
                <div className="email-row">
                  <a href={`mailto:${person.email}`} className="email-link">
                    {person.email}
                    <ArrowUpRight size={23} />
                  </a>
                  <CopyEmail />
                </div>
                <a href={person.resume} download className="text-link">
                  Get my résumé <ArrowDownToLine size={16} />
                </a>
              </div>
            </Reveal>
            <footer className="footer">
              <div className="footer-signature">
                <span className="monogram">
                  y<span>c</span>
                  <i />
                </span>
                <span>© 2026 Yash Chaudhari</span>
              </div>
              <div className="footer-links">
                <a href={person.github} target="_blank" rel="noopener noreferrer">
                  GitHub <ArrowUpRight size={12} />
                </a>
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn <ArrowUpRight size={12} />
                </a>
                <a href="#home" className="back-top" aria-label="Back to top">
                  <ArrowUp size={16} />
                </a>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
