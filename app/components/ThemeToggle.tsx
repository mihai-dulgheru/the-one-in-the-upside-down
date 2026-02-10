"use client";

import { Coffee, Utensils } from "lucide-react";
import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isFriends = theme === "friends";

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-500 hover:scale-110"
      style={{
        background: isFriends ? "#F9D059" : "#E71D36",
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: isFriends ? 0 : 180 }}
        transition={{ duration: 0.5 }}
      >
        {isFriends ? (
          <Coffee className="w-6 h-6 text-purple-900" strokeWidth={2.5} />
        ) : (
          <Utensils className="w-6 h-6 text-white" strokeWidth={2.5} />
        )}
      </motion.div>
    </motion.button>
  );
}
