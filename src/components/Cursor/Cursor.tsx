import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMousePosition } from "../../hooks/useMousePosition";
import "./Cursor.css";

const Cursor = () => {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    document.body.classList.add("custom-cursor");

    const handleEnter = (e: Event) => {
      if ((e.target as Element).closest(".project-card")) {
        setIsHovering(true);
      }
    };
    const handleLeave = (e: Event) => {
      if ((e.target as Element).closest(".project-card")) {
        setIsHovering(false);
      }
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
        x: x - (isHovering ? 40 : 6),
        y: y - (isHovering ? 40 : 6),
        width: isHovering ? 80 : 12,
        height: isHovering ? 80 : 12,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 28,
        mass: 0.5,
      }}
    >
      <AnimatePresence>
        {isHovering && (
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
