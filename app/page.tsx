"use client";

import { motion } from "framer-motion";
import FloatingSpores from "./components/FloatingSpores";
import HeroSection from "./components/HeroSection";
import MessageWall from "./components/MessageWall";
import ProposalSection from "./components/ProposalSection";
import ThemeToggle from "./components/ThemeToggle";
import YellowFramePortal from "./components/YellowFramePortal";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <FloatingSpores />
      <ThemeToggle />

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16 md:px-8">
        <motion.div
          className="flex w-full max-w-4xl flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection />
          <YellowFramePortal />
          <MessageWall />

          <motion.footer
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <p className="text-lg font-medium italic md:text-xl">
              &quot;I&apos;ll be there for you... even in the Upside Down.&quot;
            </p>
            <p className="mt-4 text-sm opacity-85">Made with 💜 and ☕</p>
          </motion.footer>

          <ProposalSection />
        </motion.div>
      </main>
    </div>
  );
}
