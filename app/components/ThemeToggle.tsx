"use client";

import { motion } from "framer-motion";
import { Coffee, Utensils } from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isFriends = theme === "friends";

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 rounded-full p-4 shadow-lg transition-all duration-500 hover:scale-110"
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
          <Coffee className="h-6 w-6 text-purple-900" strokeWidth={2.5} />
        ) : (
          <Utensils className="h-6 w-6 text-white" strokeWidth={2.5} />
        )}
      </motion.div>
    </motion.button>
  );
}
