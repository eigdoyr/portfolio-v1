import { useEffect } from "react";
import PageTransition from "../../components/PageTransition/PageTransition";
import { SECTIONS, EXPERIENCE } from "../../data/about";
import { useReveal } from "../../hooks/useReveal";
import { renderContent } from "../../utils/renderContent";
import "./About.css";

const About = () => {
  const ref = useReveal();

  useEffect(() => {
    document.title = "About — Ryodgie";
  }, []);

  return (
    <PageTransition>
      <main className="about-main" id="main-content" ref={ref}>
        {/* ── Sections ───────────────────────────────────── */}
        <div className="about-sections">
          {SECTIONS.map((section) => (
            <div key={section.index} className="about-section reveal">
              <div className="about-section-rule" />
              <div className="about-section-inner">
                <span className="about-section-label">
                  {section.index} — {section.label}
                </span>
                <p className="about-section-body">
                  {renderContent(section.content)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Experience ─────────────────────────────────── */}
        <div className="about-experience reveal">
          <div className="about-section-rule" />
          <div className="about-exp-grid">
            {EXPERIENCE.map((item) => (
              <div key={item.company} className="about-exp-item">
                <span className="about-exp-company">{item.company}</span>
                <span className="about-exp-role">{item.role}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default About;
