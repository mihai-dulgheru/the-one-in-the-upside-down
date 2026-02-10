"use client";

import ThemeToggle from "./components/ThemeToggle";
import HeroSection from "./components/HeroSection";
import YellowFramePortal from "./components/YellowFramePortal";
import MessageWall from "./components/MessageWall";
import FloatingSpores from "./components/FloatingSpores";
import ProposalSection from "./components/ProposalSection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating Spores (Stranger Things only) */}
      <FloatingSpores />

      {/* Theme Toggle Button */}
      <ThemeToggle />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 md:px-8">
        <motion.div
          className="w-full max-w-4xl flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero Section */}
          <HeroSection />

          {/* Yellow Frame Portal (Photo) */}
          <YellowFramePortal />

          {/* Interactive Message Wall */}
          <MessageWall />

          {/* Footer */}
          <motion.footer
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <p className="text-lg md:text-xl font-medium italic">
              &quot;I&apos;ll be there for you... even in the Upside Down.&quot;
            </p>
            <p className="text-sm mt-4 opacity-85">Made with 💜 and ☕</p>
          </motion.footer>

          {/* Proposal Section - The Big Question! */}
          <ProposalSection />
        </motion.div>
      </main>
    </div>
  );
}
