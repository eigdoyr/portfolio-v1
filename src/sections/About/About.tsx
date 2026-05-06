import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import PageTransition from "@components/PageTransition/PageTransition";
import { SECTIONS } from "@data/about";
import { renderContent } from "@utils/renderContent";
import {
  headlineVariants,
  headlineItem,
  fadeUp,
  staggerContainer,
  fadeUpItem,
} from "@utils/animations";
import "./About.css";

const TAGLINE = SECTIONS.find((s) => s.index === "01")!;
const BODY_SECTIONS = SECTIONS.filter((s) => s.index !== "01");

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

        {/* ── Two-column spread ────────────────────────────── */}
        <div className="about-spread">
          {/* Left column ─ identity */}
          <div className="about-left">
            <motion.div
              className="about-headline"
              variants={headlineVariants}
              initial="hidden"
              animate="show"
            >
              <motion.h1
                className="about-headline-line"
                variants={headlineItem}
              >
                UI Designer &amp;
              </motion.h1>
              <motion.h1
                className="about-headline-line"
                variants={headlineItem}
              >
                Front-End Developer
              </motion.h1>
            </motion.div>

            <motion.img
              src="/about-photo.jpg"
              alt="Ryodgie Barnatia"
              className="about-photo"
              variants={fadeUp(0.3)}
              initial="hidden"
              animate="show"
            />

            <motion.p
              className="about-tagline"
              variants={fadeUp(0.4)}
              initial="hidden"
              animate="show"
            >
              {renderContent(TAGLINE.content)}
            </motion.p>
          </div>

          {/* Right column ─ narrative */}
          <motion.div
            className="about-right"
            variants={staggerContainer(0.5)}
            initial="hidden"
            animate="show"
          >
            {BODY_SECTIONS.map((section) => (
              <motion.div
                key={section.index}
                className="about-block"
                variants={fadeUpItem}
              >
                <span className="about-block-label">{section.label}</span>
                <p className="about-block-body">
                  {renderContent(section.content)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
};

export default About;
