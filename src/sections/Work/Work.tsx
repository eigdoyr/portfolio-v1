import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projectsData } from "../../data/projects";
import { useIsMobile } from "../../hooks/useIsMobile";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import type { Project } from "../../types";
import "./Work.css";

interface WorkProps {
  isOpen: boolean;
}

const Work = ({ isOpen }: WorkProps) => {
  const [cards, setCards] = useState<Project[]>(projectsData);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const handleClose = () => navigate("/");

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
    <div
      className={`work-overlay ${isOpen ? "is-open" : ""}`}
      onClick={handleClose}
      aria-modal="true"
      aria-label="Work overlay"
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
                onClick={handleCardClick}
                onDragEnd={handleDragEnd}
              />
            ))}
        </AnimatePresence>

        {isMobile && (
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
    </div>
  );
};

export default Work;
