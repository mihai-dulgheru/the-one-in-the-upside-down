"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "./ThemeContext";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function MessageWall() {
  const { theme } = useTheme();
  const [message, setMessage] = useState("");
  const [lastMessageLength, setLastMessageLength] = useState(0);

  // Compute active lights as a derived value instead of storing in state
  const activeLights = useMemo(() => {
    if (message.length === 0) {
      return new Set<string>();
    }
    const letters = message
      .toUpperCase()
      .split("")
      .filter((char) => ALPHABET.includes(char));
    return new Set(letters);
  }, [message]);

  // Derive the blinking light from message change
  const blinkingLight = useMemo(() => {
    if (message.length === 0 || message.length <= lastMessageLength) {
      return null;
    }
    const letters = message
      .toUpperCase()
      .split("")
      .filter((char) => ALPHABET.includes(char));
    return letters[letters.length - 1] || null;
  }, [message, lastMessageLength]);

  // Update last message length after blinking animation
  useEffect(() => {
    if (message.length !== lastMessageLength) {
      const timer = setTimeout(() => {
        setLastMessageLength(message.length);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [message.length, lastMessageLength]);

  const getLightColor = (letter: string) => {
    const isActive = activeLights.has(letter);
    const isBlinking = blinkingLight === letter;

    if (theme === "stranger-things") {
      if (isBlinking) return "#E71D36"; // Red glow for blinking
      if (isActive) return "#FF6B6B"; // Lighter red for active
      return "#4A0E0E"; // Dark red for inactive
    } else {
      if (isBlinking) return "#F9D059"; // Yellow glow for blinking
      if (isActive) return "#FCD34D"; // Bright yellow for active
      return "#D1B36A"; // Muted yellow for inactive
    }
  };

  return (
    <motion.div
      className="mb-12 w-full max-w-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">
        {theme === "stranger-things"
          ? "The Message Wall"
          : "Joyce's Christmas Lights"}
      </h2>

      {/* Letter Lights Grid */}
      <div className="light-wall-bg mb-8 rounded-lg p-6">
        <div className="mb-6 grid grid-cols-13 gap-2 md:gap-3">
          {ALPHABET.map((letter) => (
            <motion.div
              key={letter}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-bold transition-all duration-300 md:h-10 md:w-10"
                style={{
                  backgroundColor: getLightColor(letter),
                  borderColor: getLightColor(letter),
                  boxShadow: activeLights.has(letter)
                    ? `0 0 15px ${getLightColor(letter)}`
                    : "none",
                }}
                animate={
                  blinkingLight === letter
                    ? {
                        scale: [1, 1.3, 1],
                        opacity: [1, 0.6, 1],
                      }
                    : {}
                }
                transition={{ duration: 0.3 }}
              >
                <span
                  className={
                    activeLights.has(letter) ? "text-white" : "text-gray-600"
                  }
                >
                  {letter}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Input Field */}
        <div className="relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="w-full rounded-lg border-2 px-4 py-3 text-black transition-all duration-300 focus:outline-none"
            style={{
              borderColor: theme === "stranger-things" ? "#E71D36" : "#F9D059",
              backgroundColor:
                theme === "stranger-things" ? "#1a1a1a" : "#FFFFFF",
              color: theme === "stranger-things" ? "#FFFFFF" : "#000000",
            }}
            maxLength={100}
          />
        </div>
      </div>
    </motion.div>
  );
}
