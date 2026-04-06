import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projectsData } from "../../data/projects";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useIsTablet } from "../../hooks/useIsTablet";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import type { Project } from "../../types";
import "./Work.css";

interface WorkProps {
  isOpen: boolean;
}

const Work = ({ isOpen }: WorkProps) => {
  const [cards, setCards] = useState<Project[]>(projectsData);
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const navigate = useNavigate();

  useFocusTrap(isOpen, ".work-overlay");

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
      style={{ pointerEvents: "none" }}
    >
      <div className="work-stage">
        <AnimatePresence>
          {isOpen &&
            cards.map((card, index) => (
              <ProjectCard
                key={card.id}
                card={card}
                index={index}
                total={cards.length}
                isMobile={isMobile}
                isTablet={isTablet}
                onClick={handleCardClick}
                onDragEnd={handleDragEnd}
              />
            ))}
        </AnimatePresence>

        {isMobile && isOpen && (
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
