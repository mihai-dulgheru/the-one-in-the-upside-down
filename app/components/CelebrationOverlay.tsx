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
    // Fire confetti immediately
    const duration = 5000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);

      // Fire confetti from both sides
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
        {/* Yellow Frame like Monica's Peephole */}
        <div className="relative p-6 md:p-8 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-lg shadow-2xl">
          <div className="border-4 border-yellow-300 rounded-lg overflow-hidden bg-purple-900 p-8 md:p-12">
            <div className="text-center max-w-md">
              {/* Lobster emoji */}
              <motion.div
                className="text-8xl mb-6"
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

              {/* Message */}
              <motion.h1
                className="text-3xl md:text-5xl font-bold mb-4 text-yellow-400"
                style={{ fontFamily: "var(--font-permanent-marker)" }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                I knew it!
              </motion.h1>

              <motion.p
                className="text-2xl md:text-3xl text-white mb-6"
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

              {/* Close button (optional) */}
              {onClose && (
                <motion.button
                  onClick={onClose}
                  className="mt-8 px-6 py-3 bg-yellow-500 text-purple-900 rounded-full font-bold hover:bg-yellow-400 transition-colors"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  Close
                </motion.button>
              )}
            </div>
          </div>

          {/* Corner decorations */}
          <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full shadow"></div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full shadow"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full shadow"></div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full shadow"></div>
        </div>
      </motion.div>
    </motion.div>
  );
}
