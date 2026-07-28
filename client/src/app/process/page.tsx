"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { processSteps } from "@/data/process";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProcessPage() {
  const [expandedStep, setExpandedStep] = useState<number | null>(0);

  function toggleStep(step: number) {
    setExpandedStep((prev) => (prev === step ? null : step));
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Badge variant="accent" className="mb-4">
              Process
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Our Process
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary-text">
              A structured approach to building exceptional software.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-8" />

            <div className="space-y-4">
              {processSteps.map((step) => {
                const isExpanded = expandedStep === step.step;

                return (
                  <motion.div
                    key={step.step}
                    variants={itemVariants}
                    className="relative"
                  >
                    <div className="absolute left-6 top-6 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-background border-2 border-accent md:left-8 md:h-8 md:w-8">
                      <span className="text-xs font-bold text-accent md:text-sm">
                        {step.step}
                      </span>
                    </div>

                    <div className="ml-16 md:ml-20">
                      <button
                        onClick={() => toggleStep(step.step)}
                        className="w-full text-left"
                      >
                        <Card
                          className={cn(
                            "transition-all duration-300 cursor-pointer",
                            isExpanded
                              ? "border-accent/50 shadow-[0_0_30px_rgba(255,255,255,0.08)]"
                              : "hover:border-accent/30"
                          )}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="text-lg font-semibold text-primary">
                                  {step.title}
                                </h3>
                                <p className="mt-1 text-sm text-secondary-text">
                                  {step.description}
                                </p>
                              </div>
                              <ChevronDown
                                className={cn(
                                  "h-5 w-5 text-secondary-text shrink-0 ml-4 transition-transform duration-300",
                                  isExpanded && "rotate-180"
                                )}
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <Card className="mt-2 border-accent/20">
                              <CardContent className="p-6">
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                  <div>
                                    <h4 className="text-sm font-medium text-accent mb-3">
                                      Deliverables
                                    </h4>
                                    <ul className="space-y-2">
                                      {step.deliverables.map(
                                        (deliverable) => (
                                          <li
                                            key={deliverable}
                                            className="flex items-start gap-2 text-sm text-secondary-text"
                                          >
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent/60" />
                                            {deliverable}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium text-accent mb-3">
                                      Expected Outcome
                                    </h4>
                                    <p className="text-sm text-secondary-text leading-relaxed">
                                      {step.outcome}
                                    </p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 text-center"
          >
            <h2 className="text-2xl font-bold text-primary">
              Ready to get started?
            </h2>
            <p className="mt-2 text-secondary-text">
              Let&apos;s walk through this process together.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="/contact">Start a Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
