"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function YellowFramePortal() {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      className="relative mb-12"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <div className="relative inline-block">
        <div className="portal-frame rounded-lg bg-linear-to-br from-yellow-400 via-yellow-500 to-yellow-600 p-3 shadow-2xl md:p-4">
          <div className="overflow-hidden rounded-lg border-4 border-yellow-300">
            <div className="relative h-80 w-64 bg-gray-200 md:h-96 md:w-80">
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
              {imageError && (
                <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-purple-200 to-pink-200">
                  <div className="p-6 text-center">
                    <div className="mb-3 text-6xl">💕</div>
                    <p className="text-sm font-medium text-gray-600">
                      Add your photo here
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      public/couple-photo.jpg
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="absolute -top-2 -left-2 h-4 w-4 rounded-full bg-yellow-400 shadow"></div>
        <div className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-yellow-400 shadow"></div>
        <div className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full bg-yellow-400 shadow"></div>
        <div className="absolute -right-2 -bottom-2 h-4 w-4 rounded-full bg-yellow-400 shadow"></div>
      </div>
    </motion.div>
  );
}
