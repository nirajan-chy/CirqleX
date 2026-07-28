"use client";

import { useRef } from "react";
import { motion, useInView, type Variant } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  once?: boolean;
}

const wordVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
  },
} satisfies Record<string, Variant>;

const containerVariants = {
  hidden: {},
  visible: {},
} satisfies Record<string, Variant>;

export function TextReveal({
  text,
  className,
  delay = 0,
  speed = 0.06,
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  // Support both normal newlines and the literal `n separator used by the
  // existing hero copy, while keeping each line independently readable.
  const lines = text
    .split(/(?:`n|\n)/)
    .map((line) => line.trim().split(/\s+/).filter(Boolean));

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: speed, delayChildren: delay }}
        className="space-y-1"
      >
        {lines.map((words, lineIndex) => (
          <div key={`${words.join("-")}-${lineIndex}`} className="flex flex-wrap justify-center">
            {words.map((word, wordIndex) => (
              <span key={`${word}-${wordIndex}`} className="text-reveal-mask mr-[0.3em]">
                <motion.span
                  className="text-reveal-inner"
                  variants={wordVariants}
                  transition={{
                    y: { duration: 0.5, ease: [0.33, 1, 0.68, 1] as const },
                    opacity: { duration: 0.4 },
                  }}
                >
                  {word === "Software" ? (
                    <span className="gradient-text-animated">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}