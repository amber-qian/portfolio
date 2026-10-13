import type {Metadata} from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { projectHistory } from "@/data/project-history";
export const instant = false;

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}


export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="detail-page">
      <div className="detail-container">
        <Link href="/#projects" className="back-link">
          ← Back to projects
        </Link>

        <p className="eyebrow">{project.category}</p>

        <h1>{project.title}</h1>

        <p className="detail-description">
          {project.description}
        </p>

        <h2>Technologies</h2>

        <div className="technology-list">
          {project.technologies.map((technology) => (
            <span
              className="technology-tag"
              key={technology}
            >
              {technology}
            </span>
          ))}
        </div>

        <section className="detail-section">
          <h2>Project overview</h2>
          <p>{project.overview}</p>

          <ul className="project-highlights">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
         </ul>
        </section>

        <section className="detail-section">
          <h2>Architecture</h2>
          <p>{project.architecture}</p>
        </section>

        <section className="detail-section">
          <h2>Technical challenges</h2>
          <ul className="project-highlights">
            {project.challenges.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
        </section>



        <section className="detail-section">
        <h2>Development history</h2>

        {projectHistory[project.slug]?.length ? (
            <div className="history-list">
            {projectHistory[project.slug].map((update) => (
                <article
                className="history-item"
                key={`${update.date}-${update.title}`}
                >
                <p className="history-date">
                    {update.date}
                </p>

                <span className={`history-type type-${update.type}`}>
                    {update.type}
                </span>

                <h3>{update.title}</h3>

                <p>{update.description}</p>

                {update.commitUrl && (
                    <a
                    className="project-link"
                    href={update.commitUrl}
                    target="_blank"
                    rel="noreferrer"
                    >
                    View Git commit ↗
                    </a>
                )}
                </article>
            ))}
            </div>
        ) : (
            <p className="detail-muted">
            Development updates haven't been published yet.
            Check back as this project evolves.
            </p>
        )}
        </section>


        <section className="detail-section">
          <h2>Source code</h2>

          {project.githubUrl ? (
            <a
              className="button button-primary"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub repository ↗
            </a>
          ) : (
            <p className="detail-muted">
              A source code link has not been added yet.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
