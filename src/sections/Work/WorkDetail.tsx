import { useEffect, useMemo } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { projectsData } from "../../data/projects";
import PageTransition from "../../components/PageTransition/PageTransition";
import type { Project } from "../../types";
import ImageWithSkeleton from "../../components/ImageWithSkeleton/ImageWithSkeleton";
import "./WorkDetail.css";
import { Helmet } from "react-helmet-async";

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

  const project = useMemo(
    () => projectsData.find((p: Project) => p.slug === slug),
    [slug],
  );
  const otherProjects = useMemo(
    () => projectsData.filter((p: Project) => p.slug !== slug),
    [slug],
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  useEffect(() => {
    if (!project) return;
    document.title = `${project.title} — Ryodgie`;
    return () => {
      document.title = "Ryodgie — Digital & Visual Designer";
    };
  }, [slug, project]);

  if (!project) return <Navigate to="/" replace />;

  return (
    <>
      <Helmet>
        <title>{project.title} — Ryodgie</title>
      </Helmet>
      <PageTransition key={slug}>
        <main className="case-study-main" id="main-content">
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
            <ImageWithSkeleton
              src={project.img}
              alt={project.title}
              loading="eager"
            />
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
    </>
  );
};

export default WorkDetail;
