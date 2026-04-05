import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.98 }}
    animate={{
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.2, 0.8, 0.2, 1],
      },
    }}
    exit={{
      opacity: 0,
      y: -20,
      scale: 0.98,
      transition: {
        duration: 0.4,
        ease: [0.2, 0.8, 0.2, 1],
      },
    }}
  >
    {children}
  </motion.div>
);

export default PageTransition;
