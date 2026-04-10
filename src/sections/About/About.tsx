import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import PageTransition from "@components/PageTransition/PageTransition";
import { SECTIONS, EXPERIENCE } from "@data/about";
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

const COL_ONE = SECTIONS.find((s) => s.index === "01")!;
const COL_TWO = SECTIONS.find((s) => s.index === "02")!;
const COL_OFFLINE = SECTIONS.find((s) => s.index === "04")!;

const About = () => {
  return (
    <PageTransition disableY>
      <Helmet>
        <title>About — Ryodgie</title>
      </Helmet>
      <main className="about-main" id="main-content">
        <h2 className="about-bg-text" aria-hidden="true">
          Ryodgie
        </h2>

        {/* ── Header row ──────────────────────────────────── */}
        <div className="about-header">
          <motion.div
            className="about-headline"
            variants={headlineVariants}
            initial="hidden"
            animate="show"
          >
            <motion.p variants={headlineItem}>Creative Developer</motion.p>
            <motion.p variants={headlineItem}>&amp; Visual Designer</motion.p>
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

        {/* ── Rule ────────────────────────────────────────── */}
        <motion.div
          className="about-rule"
          variants={drawRule(0.5)}
          initial="hidden"
          animate="show"
        />

        {/* ── Three columns ───────────────────────────────── */}
        <motion.div
          className="about-columns"
          variants={staggerContainer(0.7)}
          initial="hidden"
          animate="show"
        >
          <motion.div className="about-col" variants={fadeUpItem}>
            <span className="about-col-label">Background</span>
            <p className="about-body">{renderContent(COL_ONE.content)}</p>
            <p className="about-body">{renderContent(COL_TWO.content)}</p>
          </motion.div>

          <motion.div className="about-col" variants={fadeUpItem}>
            <span className="about-col-label">Experience</span>
            <div className="about-exp-list">
              {EXPERIENCE.map((item) => (
                <div key={item.company} className="about-exp-item">
                  <span className="about-exp-company">{item.company}</span>
                  <span className="about-exp-role">{item.role}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="about-col" variants={fadeUpItem}>
            <span className="about-col-label">Offline</span>
            <p className="about-body">{renderContent(COL_OFFLINE.content)}</p>
          </motion.div>
        </motion.div>
      </main>
    </PageTransition>
  );
};

export default About;
