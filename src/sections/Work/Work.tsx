import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projectsData } from "../../data/projects";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import type { Project } from "../../types";
import "./Work.css";

interface WorkProps {
  isOpen: boolean;
}

const getXPositions = (count: number, cardWidth: number, gap: number) => {
  const total = count * cardWidth + (count - 1) * gap;
  const start = -total / 2 + cardWidth / 2;
  return Array.from({ length: count }, (_, i) => start + i * (cardWidth + gap));
};

const Work = ({ isOpen }: WorkProps) => {
  const [cards, setCards] = useState<Project[]>(projectsData);
  const [positions, setPositions] = useState<number[]>([]);
  const [showCards, setShowCards] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  // Delay cards appearing after label shows
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowCards(true), 1000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setShowCards(false), 0);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useFocusTrap(isOpen, ".work-overlay");

  useEffect(() => {
    const calculate = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      if (vw <= 768) {
        setPositions(projectsData.map(() => 0));
        return;
      }

      const cardWidth = Math.min(vw * 0.15, vh * 0.72 * 0.8);
      const gap = cardWidth * 0.06;
      const count = projectsData.length;
      setPositions(getXPositions(count, cardWidth, gap));
    };

    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(calculate, 150);
    };

    calculate();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  const handleCardClick = (e: React.MouseEvent, slug: string) => {
    e.stopPropagation();
    navigate(`/work/${slug}`);
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number } },
  ) => {
    if (isMobile && Math.abs(info.offset.x) > 80) {
      setCards((prev) => {
        const next = [...prev];
        next.push(next.shift()!);
        return next;
      });
    }
  };

  return (
    <motion.div
      className="work-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Work — selected projects"
      tabIndex={-1}
      animate={{
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? "visible" : "hidden",
      }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="work-stage">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="work-label"
              aria-hidden="true"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span>Featured</span>
              <span>Projects</span>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showCards &&
            cards.map((card, index) => (
              <ProjectCard
                key={card.id}
                card={card}
                index={index}
                total={cards.length}
                isMobile={isMobile}
                xPos={positions[index] ?? 0}
                onClick={handleCardClick}
                onDragEnd={handleDragEnd}
              />
            ))}
        </AnimatePresence>

        {isMobile && showCards && (
          <div className="mobile-dots" aria-hidden="true">
            {projectsData.map((item) => (
              <div
                key={item.id}
                className={`dot ${cards[0].id === item.id ? "active" : ""}`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Work;
