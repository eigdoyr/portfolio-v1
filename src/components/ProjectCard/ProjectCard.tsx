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
    animate={{
      opacity: 1,
      scale: isMobile ? 1 - index * 0.05 : card.scale,
      x: isMobile ? 0 : card.x,
      y: isMobile ? index * -8 : 0,
      rotate: isMobile ? card.rotate : 0,
      transition: {
        duration: 0.9,
        delay: index * 0.08,
        ease: [0.2, 0.8, 0.2, 1],
      },
    }}
    exit={{
      opacity: 0,
      scale: 0.95,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.04,
        ease: [0.2, 0.8, 0.2, 1],
      },
    }}
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
