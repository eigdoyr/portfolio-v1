import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMousePosition } from "@hooks/useMousePosition";
import "./Cursor.css";

interface CursorProps {
  isProjects: boolean;
}

const Cursor = ({ isProjects }: CursorProps) => {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);

  // Derive actual hover state — only show VIEW when on projects route
  const showView = isHovering && isProjects;

  useEffect(() => {
    document.body.classList.add("custom-cursor");

    const handleEnter = (e: Event) => {
      if ((e.target as Element).closest(".project-card")) setIsHovering(true);
    };
    const handleLeave = (e: Event) => {
      if ((e.target as Element).closest(".project-card")) setIsHovering(false);
    };

    document.addEventListener("mouseover", handleEnter);
    document.addEventListener("mouseout", handleLeave);

    return () => {
      document.body.classList.remove("custom-cursor");
      document.removeEventListener("mouseover", handleEnter);
      document.removeEventListener("mouseout", handleLeave);
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      animate={{
        x: x - (showView ? 40 : 6),
        y: y - (showView ? 40 : 6),
        width: showView ? 80 : 12,
        height: showView ? 80 : 12,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 28, mass: 0.5 }}
    >
      <AnimatePresence>
        {showView && (
          <motion.span
            className="cursor-label"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.15 }}
          >
            VIEW
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Cursor;
