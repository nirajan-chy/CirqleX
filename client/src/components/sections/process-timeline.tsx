"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { processSteps } from "@/data/process";
import { cn } from "@/lib/utils";

export function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(1);
  const current = processSteps.find((s) => s.step === activeStep)!;

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
            Our Development Process
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-secondary-text">
            A proven, structured approach to delivering quality software on time
            and on budget.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="mt-16 hidden md:block">
          <div className="relative">
            {/* Connector line */}
            <div className="absolute left-0 right-0 top-5 h-px bg-border" />
            <div
              className="absolute left-0 top-5 h-px bg-accent transition-all duration-500"
              style={{
                width: `${((activeStep - 1) / (processSteps.length - 1)) * 100}%`,
              }}
            />

            {/* Step indicators */}
            <div className="relative flex justify-between">
              {processSteps.map((s) => (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(s.step)}
                  className="group relative z-10 flex flex-col items-center"
                >
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300",
                      activeStep === s.step
                        ? "border-accent bg-accent text-background shadow-[0_0_12px_rgba(34,211,238,0.4)]"
                        : activeStep > s.step
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-border bg-secondary text-secondary-text group-hover:border-accent/50"
                    )}
                  >
                    {s.step}
                  </div>
                  <span
                    className={cn(
                      "mt-3 text-xs font-medium transition-colors duration-300",
                      activeStep === s.step
                        ? "text-accent"
                        : "text-secondary-text"
                    )}
                  >
                    {s.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-12 rounded-xl border border-border bg-card p-8"
            >
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <h3 className="text-lg font-semibold text-primary">
                    Description
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-secondary-text">
                    {current.description}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">
                    Deliverables
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {current.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-center gap-2 text-sm text-secondary-text"
                      >
                        <span className="h-1 w-1 rounded-full bg-accent" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Outcome</h3>
                  <p className="mt-3 text-sm leading-relaxed text-secondary-text">
                    {current.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Timeline */}
        <div className="mt-16 space-y-0 md:hidden">
          <div className="relative ml-5 border-l border-border">
            {processSteps.map((s) => {
              const isActive = activeStep === s.step;

              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(s.step)}
                  className="relative w-full py-4 pl-8 text-left"
                >
                  {/* Dot */}
                  <div
                    className={cn(
                      "absolute -left-2 top-6 h-4 w-4 rounded-full border-2 transition-all duration-300",
                      isActive
                        ? "border-accent bg-accent shadow-[0_0_10px_rgba(34,211,238,0.4)]"
                        : "border-border bg-secondary"
                    )}
                  />

                  <span
                    className={cn(
                      "text-xs font-medium uppercase tracking-wider",
                      isActive ? "text-accent" : "text-secondary-text"
                    )}
                  >
                    Step {s.step}
                  </span>
                  <span
                    className={cn(
                      "mt-1 block text-sm font-semibold transition-colors",
                      isActive ? "text-primary" : "text-secondary-text"
                    )}
                  >
                    {s.title}
                  </span>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 text-sm leading-relaxed text-secondary-text">
                          {s.description}
                        </p>
                        <div className="mt-3">
                          <span className="text-xs font-medium text-primary">
                            Deliverables
                          </span>
                          <ul className="mt-1.5 space-y-1">
                            {s.deliverables.map((d) => (
                              <li
                                key={d}
                                className="flex items-center gap-2 text-xs text-secondary-text"
                              >
                                <span className="h-1 w-1 rounded-full bg-accent" />
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-3">
                          <span className="text-xs font-medium text-primary">
                            Outcome
                          </span>
                          <p className="mt-1 text-xs leading-relaxed text-secondary-text">
                            {s.outcome}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
