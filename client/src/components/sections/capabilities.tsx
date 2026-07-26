"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Code2,
  Brain,
  Cloud,
  Layers,
  HeadphonesIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const capabilities = [
  { icon: Lightbulb, label: "Product Strategy" },
  { icon: Code2, label: "Full-Stack Engineering" },
  { icon: Brain, label: "AI & Automation" },
  { icon: Cloud, label: "Cloud Infrastructure" },
  { icon: Layers, label: "Scalable Architecture" },
  { icon: HeadphonesIcon, label: "Long-Term Support" },
];

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "AWS",
  "Docker",
  "PostgreSQL",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Capabilities() {
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
            Trusted Engineering Partner
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-secondary-text">
            End-to-end capabilities to take your product from idea to production
            and beyond.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.label}
              variants={itemVariants}
              className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-accent/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-accent transition-colors duration-300 group-hover:bg-accent/10">
                <cap.icon className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-primary">{cap.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-secondary-text">
            Technologies We Work With
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
