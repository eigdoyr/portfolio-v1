import { motion } from "framer-motion";
import type { Project } from "../../types";

interface ProjectCardProps {
  card: Project;
  index: number;
  total: number;
  isMobile: boolean;
  onClick: (e: React.MouseEvent, slug: string) => void;
  onDragEnd: (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number } },
  ) => void;
}

const ProjectCard = ({
  card,
  index,
  total,
  isMobile,
  onClick,
  onDragEnd,
}: ProjectCardProps) => (
  <motion.div
    className="project-card"
    onClick={(e) => onClick(e, card.slug)}
    drag={isMobile && index === 0 ? "x" : false}
    dragConstraints={{ left: 0, right: 0 }}
    onDragEnd={onDragEnd}
    style={{ zIndex: isMobile ? total - index : card.zIndex }}
    initial={{ opacity: 0, y: 100 }}
    exit={{ opacity: 0, y: 100 }}
    animate={
      isMobile
        ? {
            x: 0,
            y: index * -8,
            rotate: card.rotate,
            scale: 1 - index * 0.05,
            opacity: 1,
          }
        : {
            x: card.x,
            y: 0,
            rotate: 0,
            scale: card.scale,
            opacity: 1,
          }
    }
    transition={{ type: "spring", stiffness: 260, damping: 28 }}
    whileHover={
      !isMobile
        ? {
            y: -25,
            scale: card.scale + 0.05,
            zIndex: 999,
            transition: {
              zIndex: { duration: 0 },
              y: { duration: 0.4, ease: "easeOut" },
            },
          }
        : {}
    }
  >
    <img
      src={card.img}
      alt={card.title}
      className="project-image"
      loading="lazy"
      decoding="async"
    />
    <span className="project-number">{card.id}</span>
  </motion.div>
);

export default ProjectCard;
