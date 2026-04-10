import { useEffect } from "react";
import PageTransition from "../../components/PageTransition/PageTransition";
import { SECTIONS, EXPERIENCE } from "../../data/about";
import { renderContent } from "../../utils/renderContent";
import "./About.css";

const COL_ONE = SECTIONS.find((s) => s.index === "01")!;
const COL_TWO = SECTIONS.find((s) => s.index === "02")!;
// const COL_THREE = SECTIONS.find((s) => s.index === "03")!;
const COL_OFFLINE = SECTIONS.find((s) => s.index === "04")!;

const About = () => {
  useEffect(() => {
    document.title = "About — Ryodgie";
  }, []);

  return (
    <PageTransition disableY>
      <main className="about-main" id="main-content">
        <h2 className="about-bg-text" aria-hidden="true">
          Ryodgie
        </h2>

        {/* ── Header row ──────────────────────────────────── */}
        <div className="about-header">
          <div className="about-headline">
            <p>Creative Developer</p>
            <p>&amp; Visual Designer</p>
          </div>
          <div className="about-header-right">
            <img
              src="/about-photo.jpg"
              alt="Ryodgie Barnatia"
              className="about-photo"
            />
          </div>
        </div>

        {/* ── Rule ────────────────────────────────────────── */}
        <div className="about-rule" />

        {/* ── Three columns ───────────────────────────────── */}
        <div className="about-columns">
          <div className="about-col">
            <span className="about-col-label">Background</span>
            <p className="about-body">{renderContent(COL_ONE.content)}</p>
            <p className="about-body">{renderContent(COL_TWO.content)}</p>
            {/* <p className="about-body">{renderContent(COL_THREE.content)}</p> */}
          </div>

          <div className="about-col">
            <span className="about-col-label">Experience</span>
            <div className="about-exp-list">
              {EXPERIENCE.map((item) => (
                <div key={item.company} className="about-exp-item">
                  <span className="about-exp-company">{item.company}</span>
                  <span className="about-exp-role">{item.role}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-col">
            <span className="about-col-label">Offline</span>
            <p className="about-body">{renderContent(COL_OFFLINE.content)}</p>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default About;
