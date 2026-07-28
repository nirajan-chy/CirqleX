"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WorkPage() {
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
              Work
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Our Work
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary-text">
              Selected projects showcasing our engineering capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-8 lg:grid-cols-2"
          >
            {caseStudies.map((study) => (
              <motion.div key={study.slug} variants={itemVariants}>
                <Link href={`/work/${study.slug}`} className="block h-full">
                  <Card className="group h-full hover:border-accent/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <Badge variant="accent" className="mb-3">
                            Placeholder
                          </Badge>
                          <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                            {study.title}
                          </h3>
                        </div>
                        <ExternalLink className="h-5 w-5 text-secondary-text group-hover:text-accent transition-colors shrink-0 mt-1" />
                      </div>

                      <p className="text-sm text-accent/80 mb-3">
                        {study.industry}
                      </p>

                      <p className="text-sm text-secondary-text mb-6 line-clamp-3">
                        {study.challenge}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.technologies.map((tech) => (
                          <Badge key={tech} variant="default">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        View case study
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {caseStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-secondary-text text-lg">
                Case studies coming soon. We&apos;re currently building this section.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
