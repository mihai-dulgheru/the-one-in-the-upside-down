"use client";

import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { useEffect } from "react";

interface CelebrationOverlayProps {
  onClose?: () => void;
}

export default function CelebrationOverlay({
  onClose,
}: CelebrationOverlayProps) {
  useEffect(() => {
    const duration = 5000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        particleCount,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#5F4B8B", "#F9D059", "#E71D36", "#2EC4B6"],
      });

      confetti({
        particleCount,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#5F4B8B", "#F9D059", "#E71D36", "#2EC4B6"],
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative"
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 0.7 }}
      >
        <div className="relative rounded-lg bg-linear-to-br from-yellow-400 via-yellow-500 to-yellow-600 p-6 shadow-2xl md:p-8">
          <div className="overflow-hidden rounded-lg border-4 border-yellow-300 bg-purple-900 p-8 md:p-12">
            <div className="max-w-md text-center">
              <motion.div
                className="mb-6 text-8xl"
                animate={{
                  rotate: [0, -10, 10, -10, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                🦞
              </motion.div>

              <motion.h1
                className="mb-4 text-3xl font-bold text-yellow-400 md:text-5xl"
                style={{ fontFamily: "var(--font-permanent-marker)" }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                I knew it!
              </motion.h1>

              <motion.p
                className="mb-6 text-2xl text-white md:text-3xl"
                style={{ fontFamily: "var(--font-permanent-marker)" }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                You&apos;re my lobster! 💕
              </motion.p>

              <motion.p
                className="text-lg text-yellow-200 italic"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                &quot;It&apos;s lobsters. They mate for life.&quot;
                <br />- Phoebe Buffay
              </motion.p>

              {onClose && (
                <motion.button
                  onClick={onClose}
                  className="mt-8 rounded-full bg-yellow-500 px-6 py-3 font-bold text-purple-900 transition-colors hover:bg-yellow-400"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  Close
                </motion.button>
              )}
            </div>
          </div>

          <div className="absolute -top-2 -left-2 h-6 w-6 rounded-full bg-yellow-400 shadow"></div>
          <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-yellow-400 shadow"></div>
          <div className="absolute -bottom-2 -left-2 h-6 w-6 rounded-full bg-yellow-400 shadow"></div>
          <div className="absolute -right-2 -bottom-2 h-6 w-6 rounded-full bg-yellow-400 shadow"></div>
        </div>
      </motion.div>
    </motion.div>
  );
}
