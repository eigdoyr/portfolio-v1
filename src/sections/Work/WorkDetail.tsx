import { Helmet } from "react-helmet-async";
import { useEffect, useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projectsData } from "@data/projects";
import ProjectThumb from "@components/ProjectThumb/ProjectThumb";
import PageTransition from "@components/PageTransition/PageTransition";
import ImageWithSkeleton from "@components/ImageWithSkeleton/ImageWithSkeleton";
import {
  headlineVariants,
  headlineItem,
  fadeUp,
  staggerContainer,
  fadeUpItem,
} from "@utils/animations";
import "./WorkDetail.css";

const WorkDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = useMemo(
    () => projectsData.find((p) => p.slug === slug),
    [slug],
  );
  const otherProjects = useMemo(
    () => projectsData.filter((p) => p.slug !== slug),
    [slug],
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Ryodgie`;
    }
  }, [slug, project]);

  if (!project) return <Navigate to="/" replace />;

  return (
    <>
      <Helmet>
        <title>{project.title} — Ryodgie</title>
      </Helmet>
      <PageTransition key={slug}>
        <main className="case-study-main" id="main-content">
          {/* ── Header ──────────────────────────────────── */}
          <motion.header
            className="cs-header"
            variants={headlineVariants}
            initial="hidden"
            animate="show"
          >
            <motion.h1 className="cs-title" variants={headlineItem}>
              {project.title}
            </motion.h1>
            <motion.div className="cs-meta" variants={headlineItem}>
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
              <span>{project.year}</span>
            </motion.div>
          </motion.header>

          {/* ── Hero image ──────────────────────────────── */}
          <motion.section
            className="cs-hero-image"
            variants={fadeUp(0.3)}
            initial="hidden"
            animate="show"
          >
            <ImageWithSkeleton
              src={project.img}
              alt={project.title}
              loading="eager"
            />
          </motion.section>

          {/* ── Content ─────────────────────────────────── */}
          <motion.section
            className="cs-content"
            variants={fadeUp(0.5)}
            initial="hidden"
            animate="show"
          >
            <div className="cs-grid">
              <div className="cs-col-left">
                <h2>The Challenge</h2>
              </div>
              <div className="cs-col-right">
                <p>{project.challenge ?? project.description}</p>
              </div>
            </div>
          </motion.section>

          {/* ── Gallery ─────────────────────────────────── */}
          {project.images && project.images.length > 0 && (
            <motion.section
              className="cs-gallery"
              variants={staggerContainer(0.6)}
              initial="hidden"
              animate="show"
            >
              {project.images.map((src, i) => (
                <motion.div
                  key={src}
                  className="cs-gallery-item"
                  variants={fadeUp(i * 0.1)}
                >
                  <ImageWithSkeleton
                    src={src}
                    alt={`${project.title} — ${i + 1}`}
                  />
                </motion.div>
              ))}
            </motion.section>
          )}

          {/* ── More work ───────────────────────────────── */}
          <motion.section
            className="cs-more-work"
            variants={staggerContainer(0.6)}
            initial="hidden"
            animate="show"
          >
            <motion.h3 className="more-work-heading" variants={fadeUpItem}>
              Selected Works
            </motion.h3>
            <motion.div
              className="more-work-grid"
              variants={staggerContainer(0.1)}
            >
              {otherProjects.map((p) => (
                <motion.div key={p.id} variants={fadeUpItem}>
                  <ProjectThumb project={p} />
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        </main>
      </PageTransition>
    </>
  );
};

export default WorkDetail;
