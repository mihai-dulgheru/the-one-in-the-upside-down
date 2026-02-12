"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";

// Generate spores at module level (runs once when module loads)
// This satisfies React's strict purity rules by moving impure code outside the component
const SPORES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  duration: Math.random() * 10 + 10,
  delay: Math.random() * 5,
  xMove: Math.random() * 20 - 10,
}));

export default function FloatingSpores() {
  const { theme } = useTheme();

  if (theme !== "stranger-things") {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {SPORES.map((spore) => (
        <motion.div
          key={spore.id}
          className="absolute rounded-full bg-white opacity-30 blur-sm"
          style={{
            left: `${spore.x}%`,
            top: `${spore.y}%`,
            width: `${spore.size}px`,
            height: `${spore.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, spore.xMove, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: spore.duration,
            delay: spore.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
