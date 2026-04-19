import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import PageTransition from "@components/PageTransition/PageTransition";
import { SECTIONS } from "@data/about";
import { renderContent } from "@utils/renderContent";
import {
  headlineVariants,
  headlineItem,
  fadeUp,
  drawRule,
  staggerContainer,
  fadeUpItem,
} from "@utils/animations";
import "./About.css";

const INTRO = SECTIONS.find((s) => s.index === "01")!;
const COLS = SECTIONS.filter((s) => s.index !== "01");

const About = () => {
  return (
    <PageTransition disableY>
      <Helmet>
        <title>About — Ryodgie</title>
      </Helmet>
      <main className="about-main">
        {/* ── Background watermark ─────────────────────────── */}
        <h2 className="about-bg-text" aria-hidden="true">
          Ryodgie
        </h2>

        {/* ── Header row ───────────────────────────────────── */}
        <div className="about-header">
          <motion.div
            className="about-headline"
            variants={headlineVariants}
            initial="hidden"
            animate="show"
          >
            <motion.h1 className="about-headline-line" variants={headlineItem}>
              UI Designer &amp;
            </motion.h1>
            <motion.h1 className="about-headline-line" variants={headlineItem}>
              Front-End Developer
            </motion.h1>
          </motion.div>

          <motion.div
            className="about-header-right"
            variants={fadeUp(0.3)}
            initial="hidden"
            animate="show"
          >
            <img
              src="/about-photo.jpg"
              alt="Ryodgie Barnatia"
              className="about-photo"
            />
          </motion.div>
        </div>

        {/* ── Intro ─────────────────────────────────────────── */}
        <motion.p
          className="about-intro"
          variants={fadeUp(0.2)}
          initial="hidden"
          animate="show"
        >
          {renderContent(INTRO.content)}
        </motion.p>

        {/* ── Rule ─────────────────────────────────────────── */}
        <motion.div
          className="about-rule"
          variants={drawRule(0.5)}
          initial="hidden"
          animate="show"
        />

        {/* ── Four columns ─────────────────────────────────── */}
        <motion.div
          className="about-columns"
          variants={staggerContainer(0.7)}
          initial="hidden"
          animate="show"
        >
          {COLS.map((section) => (
            <motion.div
              key={section.index}
              className="about-col"
              variants={fadeUpItem}
            >
              <span className="about-col-label">{section.label}</span>
              <p className="about-body">{renderContent(section.content)}</p>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </PageTransition>
  );
};

export default About;
