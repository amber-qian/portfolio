import CurrentYear from "./CurrentYear";
import {projects} from "@/data/projects";
import Link from "next/link";

const technologies = [
  "C#",
  ".NET",
  "Python",
  "Django",
  "React",
  "TypeScript",
  "SQL Server",
  "Oracle",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#">
          AQ<span>.</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a
            href="/Amber-Qian-Resume.pdf"
            className="nav-resume"
            target="_blank"
            rel="noreferrer"
          >
            Resume ↗
          </a>
        </nav>

        <a className="header-link" href="#projects">
          Explore my work ↗
        </a>
      </header>

      <section className="hero">
        <p className="eyebrow">
          FULL STACK DEVELOPER · CALGARY, CANADA
        </p>

        <h1>
          Building software
          <br />
          that <span>solves real problems.</span>
        </h1>

        <p className="hero-description">
          I&apos;m Amber, a software developer with 10+ years
          of experience building enterprise applications,
          APIs, and database solutions.
        </p>

        <div className="hero-actions">
          <a
            href="/Amber-Qian-Resume.pdf"
            className="button button-primary"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume ↓
          </a>

          <a href="#projects" className="button button-secondary">
            Explore Projects →
          </a>
        </div>

        <p className="hero-note">
          C# / .NET · Python · React · SQL
        </p>
      </section>

      <section className="skills-section" id="about">
        <div className="section-heading">
          <p className="eyebrow">MY TOOLKIT</p>
          <h2>Technologies I work with</h2>
        </div>

        <div className="technology-list">
          {technologies.map((technology) => (
            <span className="technology-tag" key={technology}>
              {technology}
            </span>
          ))}
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>Projects & experience</h2>
          <p>
            A look at the types of software solutions I
            have worked on and continue to build.
          </p>
        </div>


        <div className="project-grid">
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <article className="project-card" key={project.slug}>
                <div className="project-number">
                  PROJECT {String(index + 1).padStart(2, "0")}
                </div>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <p className="project-technologies">
                  {project.technologies.join(" · ")}
                </p>

                <Link
                  href={`/projects/${project.slug}`}
                  className="project-link"
                >
                  View project details ↗
                </Link>

              </article>
            ))}
        </div>


      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">LET&apos;S CONNECT</p>
        <h2>Have an interesting project in mind?</h2>
        <p>
          I&apos;m interested in software development,
          data solutions, and building useful applications.
        </p>
        <a
          className="button button-primary"
          href="mailto:qian.amber@hotmail.com"
        >
          Get in touch ↗
        </a>
      </section>

      <footer className="site-footer">
        <span>© <CurrentYear /> Amber Qian</span>
        <span>Built with Next.js & TypeScript</span>
      </footer>
    </main>
  );
}
