"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TextReveal } from "@/components/ui/text-reveal";

const HeroNetwork = dynamic(() => import("./hero-network"), {
  ssr: false,
  loading: () => null,
});

const subtitleVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay: 0.8, ease: [0.33, 1, 0.68, 1] as const },
  },
};

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      <HeroNetwork className="absolute inset-0 z-0" />

      <div className="absolute inset-0 z-[1] grid-pattern opacity-[0.07]" />

      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-background/60 via-background/30 to-background/80" />

      <motion.div
        className="hero-content relative z-10 mx-auto max-w-5xl px-6 text-center"
        style={{ opacity, scale, y }}
      >
        {/* Main Heading - Word-by-word reveal */}
        <TextReveal
          text="We Build Software That Moves Businesses Forward."
          className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]"
          speed={0.06}
          delay={0.1}
        />

        {/* Subtitle with blur reveal */}
        <motion.p
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-secondary-text sm:text-lg md:text-xl"
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          From custom software and web applications to mobile platforms and
          AI-powered products, we design and engineer digital solutions built
          for real-world growth.
        </motion.p>

        {/* CTAs with magnetic effect + stagger */}
        <motion.div
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
        >
          <MagneticButton strength={0.25}>
            <Button size="lg" asChild>
              <Link href="/contact">Start a Project</Link>
            </Button>
          </MagneticButton>

          <MagneticButton strength={0.25}>
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </MagneticButton>
        </motion.div>

        {/* Subtle scroll indicator */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="mx-auto h-10 w-6 rounded-full border border-border flex justify-center pt-2"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="h-2 w-1 rounded-full bg-accent"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
