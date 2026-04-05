import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as any },
    }}
    exit={{
      opacity: 0,
      y: -8,
      transition: { duration: 0.25 },
    }}
  >
    {children}
  </motion.div>
);

export default PageTransition;
