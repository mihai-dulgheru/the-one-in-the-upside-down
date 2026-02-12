"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import CelebrationOverlay from "./CelebrationOverlay";
import { useTheme } from "./ThemeContext";

export default function ProposalSection() {
  const { theme } = useTheme();
  const [showCelebration, setShowCelebration] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 200, y: 80 });
  const [chaseCount, setChaseCount] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [noButtonText, setNoButtonText] = useState("No");
  const containerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const handleYesClick = () => {
    setShowCelebration(true);
  };

  const handleNoHover = () => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.clientWidth;

    const minX = 50;
    const maxX = Math.min(containerWidth - 150, 600);
    const minY = 150;
    const maxY = 280;

    const randomX = minX + Math.random() * (maxX - minX);
    const randomY = minY + Math.random() * (maxY - minY);

    setNoButtonPosition({ x: randomX, y: randomY });
    setChaseCount((prev) => prev + 1);

    if (chaseCount >= 2 && Math.random() < 0.3) {
      setIsGlitching(true);

      const glitchTexts = [
        "Pivot!",
        "Friends Don't Lie!",
        "Nope!",
        "Try Again!",
        "Not Today!",
        "Nice Try!",
      ];

      const randomText =
        glitchTexts[Math.floor(Math.random() * glitchTexts.length)];
      setNoButtonText(randomText);

      setTimeout(() => {
        setIsGlitching(false);
        setNoButtonText("No");
      }, 800);
    }
  };

  return (
    <>
      <motion.section
        ref={containerRef}
        className="relative mt-16 mb-12 min-h-96 w-full max-w-4xl rounded-2xl p-8"
        style={{
          background:
            theme === "stranger-things"
              ? "linear-gradient(135deg, #1a0000 0%, #090909 50%, #1a0000 100%)"
              : "linear-gradient(135deg, #7B68AA 0%, #5F4B8B 50%, #4A3A6F 100%)",
          border:
            theme === "stranger-things"
              ? "2px solid #E71D36"
              : "2px solid #F9D059",
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.h2
          className="proposal-heading mb-12 text-center text-4xl font-bold md:text-6xl"
          style={{
            fontFamily: "var(--font-merriweather)",
            color: "#E71D36",
            textShadow: "0 0 20px #E71D36, 0 0 40px #E71D36, 0 0 60px #E71D36",
          }}
          animate={{
            textShadow: [
              "0 0 20px #E71D36, 0 0 40px #E71D36, 0 0 60px #E71D36",
              "0 0 30px #E71D36, 0 0 50px #E71D36, 0 0 70px #E71D36",
              "0 0 20px #E71D36, 0 0 40px #E71D36, 0 0 60px #E71D36",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Will you be my Valentine?
        </motion.h2>

        <div className="relative flex flex-col items-center justify-center gap-6 md:flex-row md:gap-8">
          <motion.button
            onClick={handleYesClick}
            className="transform rounded-full px-12 py-6 text-2xl font-bold shadow-2xl transition-all duration-300 hover:scale-110 md:text-3xl"
            style={{
              background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              color: "white",
              fontFamily: "var(--font-permanent-marker)",
              boxShadow: "0 10px 30px rgba(16, 185, 129, 0.5)",
            }}
            whileHover={{
              boxShadow: "0 15px 40px rgba(16, 185, 129, 0.7)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            YES! (Obviously)
          </motion.button>

          <motion.button
            ref={noButtonRef}
            onMouseEnter={handleNoHover}
            className="absolute rounded-full px-6 py-3 text-lg font-semibold transition-all duration-200"
            style={{
              background: isGlitching
                ? "linear-gradient(135deg, #1a0000 0%, #E71D36 50%, #1a0000 100%)"
                : "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
              color: "white",
              boxShadow: isGlitching
                ? "0 0 20px #E71D36, 0 0 40px #E71D36"
                : "0 5px 15px rgba(239, 68, 68, 0.5)",
              filter: isGlitching ? "blur(2px) contrast(1.5)" : "none",
              animation: isGlitching ? "glitch 0.3s infinite" : "none",
            }}
            animate={{
              x: noButtonPosition.x,
              y: noButtonPosition.y,
            }}
            transition={{
              duration: 0,
            }}
          >
            {noButtonText}
          </motion.button>
        </div>

        <motion.p
          className="mt-8 text-center text-sm opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 1.5 }}
        >
          {chaseCount > 5
            ? "😏 Still trying, huh?"
            : chaseCount > 2
              ? "😄 You can't catch it!"
              : "💝 Choose wisely..."}
        </motion.p>
      </motion.section>

      <AnimatePresence>
        {showCelebration && (
          <CelebrationOverlay onClose={() => setShowCelebration(false)} />
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(2px, -2px);
          }
          60% {
            transform: translate(-2px, -2px);
          }
          80% {
            transform: translate(2px, 2px);
          }
          100% {
            transform: translate(0);
          }
        }
      `}</style>
    </>
  );
}
