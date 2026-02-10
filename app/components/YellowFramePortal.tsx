"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function YellowFramePortal() {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      className="relative mb-12"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      {/* Monica's Peephole Frame */}
      <div className="relative inline-block">
        <div className="portal-frame p-3 md:p-4 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-lg shadow-2xl">
          <div className="border-4 border-yellow-300 rounded-lg overflow-hidden">
            <div className="relative w-64 h-80 md:w-80 md:h-96 bg-gray-200">
              {!imageError && (
                <Image
                  src="/couple-photo.jpg"
                  alt="Couple Photo"
                  fill
                  className="object-cover"
                  onError={() => setImageError(true)}
                  priority
                />
              )}
              {/* Placeholder overlay - only shows when image fails to load */}
              {imageError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-200 to-pink-200">
                  <div className="text-center p-6">
                    <div className="text-6xl mb-3">💕</div>
                    <p className="text-sm text-gray-600 font-medium">
                      Add your photo here
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      public/couple-photo.jpg
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Corner decorations */}
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full shadow"></div>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full shadow"></div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full shadow"></div>
        <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full shadow"></div>
      </div>
    </motion.div>
  );
}
