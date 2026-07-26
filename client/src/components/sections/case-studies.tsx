"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function CaseStudies() {
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
            Our Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-secondary-text">
            Selected projects showcasing our engineering capabilities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {caseStudies.map((caseStudy) => (
            <motion.div key={caseStudy.slug} variants={itemVariants}>
              <Link
                href={`/work/${caseStudy.slug}`}
                className="group block h-full"
              >
                <Card className="relative flex h-full flex-col overflow-hidden transition-all duration-300 hover:border-accent/50">
                  <div className="absolute right-3 top-3 z-10">
                    <span className="inline-flex items-center gap-1 rounded-md bg-yellow-500/10 border border-yellow-500/20 px-2 py-0.5 text-[10px] font-medium text-yellow-500">
                      <AlertTriangle className="h-3 w-3" />
                      Case Study Placeholder
                    </span>
                  </div>

                  <CardContent className="flex flex-1 flex-col p-6">
                    <div className="mb-3">
                      <Badge variant="accent" className="text-[11px]">
                        {caseStudy.industry}
                      </Badge>
                    </div>

                    <h3 className="text-lg font-semibold text-primary transition-colors duration-200 group-hover:text-accent">
                      {caseStudy.title}
                    </h3>

                    <div className="mt-3">
                      <p className="text-xs font-medium uppercase tracking-wider text-secondary-text/60">
                        Challenge
                      </p>
                      <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-secondary-text">
                        {caseStudy.challenge}
                      </p>
                    </div>

                    <div className="mt-3">
                      <p className="text-xs font-medium uppercase tracking-wider text-secondary-text/60">
                        Solution
                      </p>
                      <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-secondary-text">
                        {caseStudy.solution}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {caseStudy.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="default"
                          className="text-[11px]"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-auto pt-6">
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-all duration-200 group-hover:gap-2.5">
                        View Case Study
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
