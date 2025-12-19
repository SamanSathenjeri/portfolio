"use client";

import { motion } from "framer-motion";

export default function LoudPop({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{
        scale: [1, 1.14, 0.96, 1],
        x: [0, -5, 5, -3, 3, 0],
        opacity: [1, 0.9, 1],
      }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className="inline-block cursor-pointer"
    >
      {children}
    </motion.div>
  );
}
