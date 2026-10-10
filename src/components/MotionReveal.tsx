"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface MotionRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export default function MotionReveal({
  children,
  delay = 0,
  duration = 0.65,
  yOffset = 32,
  className = "",
  ...props
}: MotionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Framer signature spring curve
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
