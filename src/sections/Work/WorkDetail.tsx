import { Helmet } from "react-helmet-async";
import { useEffect, useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projectsData } from "@data/projects";
import ProjectThumb from "@components/ProjectThumb/ProjectThumb";
import PageTransition from "@components/PageTransition/PageTransition";
import ImageWithSkeleton from "@components/ImageWithSkeleton/ImageWithSkeleton";
import { galleryItemReveal } from "@utils/animations";
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
          {/* ── Header ──────────────────────────────────── */}
          <motion.header
            className="cs-header"
            variants={headlineVariants}
            initial="hidden"
            animate="show"
          >
            <motion.div className="cs-header-left" variants={headlineItem}>
              <h1 className="cs-title">{project.title}</h1>
              <p className="cs-category">{project.category}</p>
            </motion.div>
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
            <div className="cs-block">
              <h2 className="cs-block-label">The Challenge</h2>
              <p className="cs-block-body">{project.challenge}</p>
            </div>
            <div className="cs-block">
              <h2 className="cs-block-label">The Design Approach</h2>
              <p className="cs-block-body">{project.approach}</p>
            </div>
          </motion.section>

          {/* ── Gallery ─────────────────────────────────── */}
          {project.images && project.images.length > 0 && (
            <motion.section
              className="cs-gallery"
              initial="hidden"
              animate="show"
              variants={staggerContainer(0.6)}
            >
              {project.images.map((src, i) => (
                <motion.div
                  key={src}
                  className="cs-gallery-item"
                  {...galleryItemReveal(i)}
                >
                  <ImageWithSkeleton
                    src={src}
                    alt={`${project.title} — ${i + 1}`}
                    loading="lazy"
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
