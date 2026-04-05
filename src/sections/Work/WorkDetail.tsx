import { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { projectsData } from "../../data/projects";
import PageTransition from "../../components/PageTransition/PageTransition";
import type { Project } from "../../types";
import "./WorkDetail.css";

interface ProjectThumbProps {
  project: Project;
}

const ProjectThumb = ({ project }: ProjectThumbProps) => (
  <Link to={`/work/${project.slug}`} className="more-card">
    <div className="more-img-wrapper">
      <img
        src={project.img}
        alt={project.title}
        loading="lazy"
        decoding="async"
      />
    </div>
    <div className="more-info">
      <span>{project.id}</span>
      <span>{project.title}</span>
    </div>
  </Link>
);

const WorkDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);
  const otherProjects = projectsData.filter((p) => p.slug !== slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!project) return <Navigate to="/" replace />;

  return (
    <PageTransition>
      <main className="case-study-main">
        <header className="cs-header">
          <h1 className="cs-title">{project.title}</h1>
          <div className="cs-meta">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
            <span>{project.year}</span>
          </div>
        </header>

        <section className="cs-hero-image">
          <img src={project.img} alt={project.title} />
        </section>

        <section className="cs-content">
          <div className="cs-grid">
            <div className="cs-col-left">
              <h2>The Challenge</h2>
            </div>
            <div className="cs-col-right">
              <p>{project.description}</p>
            </div>
          </div>
        </section>

        <section className="cs-more-work">
          <h3 className="more-work-heading">Selected Works</h3>
          <div className="more-work-grid">
            {otherProjects.map((p) => (
              <ProjectThumb key={p.id} project={p} />
            ))}
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default WorkDetail;
