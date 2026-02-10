"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";

export default function HeroSection() {
  const { theme } = useTheme();
  const isStrangerThings = theme === "stranger-things";

  return (
    <motion.div
      className="text-center mb-12 relative"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="hero-text text-4xl md:text-6xl lg:text-7xl font-bold mb-4 transition-all duration-700"
        animate={{
          rotate: isStrangerThings ? 180 : 0,
        }}
        transition={{ duration: 0.7 }}
        style={{
          fontFamily: isStrangerThings
            ? "var(--font-merriweather)"
            : "var(--font-permanent-marker)",
        }}
      >
        The One Where
        <br />
        <span className="relative inline-block">
          Loves Ana
          {isStrangerThings && (
            <motion.span
              className="absolute inset-0 blur-lg"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                color: "#E71D36",
              }}
            >
              Loves Ana
            </motion.span>
          )}
        </span>
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl opacity-95"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.95 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {isStrangerThings
          ? "...even in the Upside Down"
          : "A crossover nobody asked for"}
      </motion.p>
    </motion.div>
  );
}
