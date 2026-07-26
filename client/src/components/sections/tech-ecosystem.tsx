"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { techCategories } from "@/data/technologies";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const categoryConnections: Record<string, string[]> = {
  Frontend: ["Backend", "Database"],
  Backend: ["Frontend", "Database", "Cloud", "AI"],
  Database: ["Backend", "Cloud"],
  Cloud: ["Backend", "Database", "DevOps"],
  DevOps: ["Cloud", "Backend"],
  AI: ["Backend", "Cloud"],
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function TechEcosystem() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const connectedCategories = hoveredCategory
    ? categoryConnections[hoveredCategory] ?? []
    : [];

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Technology Ecosystem
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-secondary-text">
            Technologies We Work With
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mt-16 hidden grid-cols-3 gap-6 lg:grid"
        >
          {techCategories.map((category) => {
            const isHovered = hoveredCategory === category.name;
            const isConnected = connectedCategories.includes(category.name);
            const isDimmed =
              hoveredCategory !== null && !isHovered && !isConnected;

            return (
              <motion.div
                key={category.name}
                variants={itemVariants}
                onMouseEnter={() => setHoveredCategory(category.name)}
                onMouseLeave={() => setHoveredCategory(null)}
                animate={{
                  opacity: isDimmed ? 0.4 : 1,
                  scale: isHovered ? 1.02 : 1,
                }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "rounded-xl border bg-card p-6 transition-colors duration-300",
                  isHovered ? "border-accent" : "border-border"
                )}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={cn(
                      "h-2 w-2 rounded-full transition-colors duration-300",
                      isHovered || isConnected ? "bg-accent" : "bg-border"
                    )}
                  />
                  <h3 className="text-base font-semibold text-primary">
                    {category.name}
                  </h3>
                  {isConnected && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="ml-auto h-1.5 w-1.5 rounded-full bg-accent/50"
                    />
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {category.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="group/tech rounded-lg border border-border/50 bg-secondary/50 px-3 py-2 transition-all duration-200 hover:border-accent/30 hover:bg-accent/5"
                    >
                      <span className="text-xs font-medium text-primary">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}

          <AnimatePresence>
            {hoveredCategory && (
              <motion.svg
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="pointer-events-none absolute inset-0 h-full w-full"
              >
                {connectedCategories.map((target) => {
                  const sourceIdx = techCategories.findIndex(
                    (c) => c.name === hoveredCategory
                  );
                  const targetIdx = techCategories.findIndex(
                    (c) => c.name === target
                  );
                  if (sourceIdx === -1 || targetIdx === -1) return null;

                  const cols = 3;
                  const gapX = 24;
                  const gapY = 24;
                  const cardW = 33.333;
                  const cardH = 50;

                  const sx =
                    ((sourceIdx % cols) * (cardW + gapX) + cardW / 2) + "%";
                  const sy =
                    (Math.floor(sourceIdx / cols) * (cardH + gapY) + cardH / 2) +
                    "%";
                  const tx =
                    ((targetIdx % cols) * (cardW + gapX) + cardW / 2) + "%";
                  const ty =
                    (Math.floor(targetIdx / cols) * (cardH + gapY) + cardH / 2) +
                    "%";

                  return (
                    <line
                      key={target}
                      x1={sx}
                      y1={sy}
                      x2={tx}
                      y2={ty}
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-accent/20"
                      strokeDasharray="4 4"
                    />
                  );
                })}
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mt-16 flex flex-col gap-4 lg:hidden"
        >
          {techCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="rounded-xl border border-border bg-card p-5"
            >
              <div className="mb-3 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <h3 className="text-sm font-semibold text-primary">
                  {category.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <Badge key={tech.name} variant="outline" className="text-xs">
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
