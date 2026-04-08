import { useEffect, useRef } from "react";
import PageTransition from "../../components/PageTransition/PageTransition";
import "./About.css";

const EXPERIENCE = [
  { company: "Wirestock", role: "Visual Designer" },
  { company: "MC2", role: "Front-End Developer" },
  { company: "Tribune Publishing", role: "Customer Experience" },
  { company: "Los Angeles Times", role: "Digital and Website Services" },
];

type ContentPart = string | { bold: string };

const SECTIONS: {
  index: string;
  label: string;
  content: ContentPart[];
}[] = [
  {
    index: "01",
    label: "Background",
    content: [
      "I'm ",
      { bold: "Ryodgie Barnatia" },
      ", a ",
      { bold: "Visual and Web Designer and Developer" },
      " based in the ",
      { bold: "Philippines" },
      " - creating digital experiences that feel intentional, structured, and culturally aware.",
    ],
  },
  {
    index: "02",
    label: "Path",
    content: [
      "My path wasn't linear. For more than a decade, I stayed in the safe zone — moving through a steady career while quieting a creative instinct I've carried since childhood. But comfort has a ceiling. Eventually, the fear of staying still outweighed the fear of starting over.",
    ],
  },
  {
    index: "03",
    label: "Experience",
    content: [
      "I've since worked across design and development — from building front-end components in ",
      { bold: "Vue.js" },
      " at ",
      { bold: "MC2" },
      ", to crafting visual assets that contributed to ",
      { bold: "AI model training" },
      " at ",
      { bold: "Wirestock" },
      ". And nearly a decade supporting customers at the ",
      { bold: "Los Angeles Times" },
      " and ",
      { bold: "Tribune Publishing" },
    ],
  },
  {
    index: "04",
    label: "Philosophy",
    content: [
      "My philosophy is simple: ",
      { bold: "less, but better" },
      ". Every layout, component, and interaction I build is shaped by one question — does this make someone's experience ",
      { bold: "easier" },
      ", or just busier?",
    ],
  },
  {
    index: "05",
    label: "Offline",
    content: [
      "Outside of work, I'm drawn to ",
      { bold: "slow mornings" },
      ", ",
      { bold: "quiet spaces" },
      ", ",
      { bold: "photography" },
      ", and the kind of focus that only comes with a ",
      { bold: "good cup of coffee" },
      ". And ",
      { bold: "dogs" },
      ". That part's non-negotiable.",
    ],
  },
];

const renderContent = (content: ContentPart[]) =>
  content.map((part, i) =>
    typeof part === "string" ? (
      <span key={i}>{part}</span>
    ) : (
      <strong key={i}>{part.bold}</strong>
    ),
  );

const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
      );

      const elements = ref.current?.querySelectorAll(".reveal");
      elements?.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return ref;
};

const About = () => {
  const ref = useReveal();

  useEffect(() => {
    document.title = "About — Ryodgie";
    return () => {
      document.title =
        "Ryodgie — Visual & Web Designer and Front-end Developer";
    };
  }, []);

  return (
    <PageTransition>
      <main className="about-main" id="main-content" ref={ref}>
        {/* ── Hero ───────────────────────────────────────── */}
        {/* <div className="about-hero reveal">
          <h1 className="about-name">Ryodgie</h1>
          <p className="about-role">
            Visual and Web Designer &amp; Front-end Developer
          </p>
        </div> */}

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
