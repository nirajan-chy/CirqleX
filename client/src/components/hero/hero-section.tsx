"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TextReveal } from "@/components/ui/text-reveal";
import styles from "./hero-section.module.css";

const HeroNetwork = dynamic(() => import("./hero-network"), {
  ssr: false,
  loading: () => null,
});

const ctaVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: 1.2, ease: [0.33, 1, 0.68, 1] as const },
  },
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, -60]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-screen overflow-hidden bg-transparent"
    >
      <HeroNetwork className="absolute inset-0 z-0 opacity-20" />
      <div className={styles.orbit} aria-hidden="true" />
      <div className={styles.orbitSmall} aria-hidden="true" />
      <div className={styles.sideLabel} aria-hidden="true">TECHSEWA / DIGITAL ENGINEERING</div>
      <div className={styles.heroRule} aria-hidden="true" />

      <motion.div
        className="hero-content relative z-10 mx-auto flex min-h-screen max-w-[86rem] flex-col justify-center px-6 pb-20 pt-28 sm:px-10 lg:px-14"
        style={{ opacity, scale, y }}
      >
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <motion.p className="mb-6 font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-secondary-text sm:text-xs" initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.15 }}>
            Independent digital partner ? 2026
          </motion.p>
          <TextReveal text={"We Build`nSoftware That`nMoves Businesses`nForward."} className="mx-auto max-w-3xl text-center [font-family:var(--font-dancing-script)] text-4xl font-bold leading-[0.92] tracking-[-0.045em] text-primary sm:text-5xl md:text-[3.75rem] lg:text-[clamp(4rem,5.5vw,5.75rem)]" speed={0.035} delay={0.12} />
        </div>
        <motion.div className="mt-12 flex flex-col items-start justify-between gap-8 border-t border-white/20 pt-5 sm:flex-row sm:items-center" variants={ctaVariants} initial="hidden" animate="visible">
          <div className="flex flex-col gap-3 sm:flex-row">
            <MagneticButton strength={0.2}><Button size="lg" className="rounded-none px-7" asChild><Link href="/contact">Start a Project</Link></Button></MagneticButton>
            <MagneticButton strength={0.2}><Button variant="outline" size="lg" className="rounded-none px-7" asChild><Link href="/services">Explore Our Services</Link></Button></MagneticButton>
          </div>
          <motion.p className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary-text" animate={{ opacity: [0.45, 1, 0.45] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}>Scroll to explore ?</motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}




