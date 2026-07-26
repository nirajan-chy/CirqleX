"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function CaseStudyDetailClient({
  study,
}: {
  study: CaseStudy;
}) {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/work"
              className="inline-flex items-center text-sm text-secondary-text hover:text-accent transition-colors mb-8"
            >
              ← Back to Work
            </Link>
            <Badge variant="accent" className="mb-4">
              Placeholder
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              {study.title}
            </h1>
            <p className="mt-4 text-lg text-accent/80">{study.industry}</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-xl font-semibold text-primary mb-4">
                      The Challenge
                    </h2>
                    <p className="text-secondary-text leading-relaxed">
                      {study.challenge}
                    </p>
                    <Badge variant="default" className="mt-4">
                      Placeholder
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-xl font-semibold text-primary mb-4">
                      Our Solution
                    </h2>
                    <p className="text-secondary-text leading-relaxed">
                      {study.solution}
                    </p>
                    <Badge variant="default" className="mt-4">
                      Placeholder
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-xl font-semibold text-primary mb-4">
                      The Result
                    </h2>
                    <p className="text-secondary-text leading-relaxed">
                      {study.result}
                    </p>
                    <Badge variant="default" className="mt-4">
                      Placeholder
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="sticky top-24">
                <CardContent className="p-8">
                  <h2 className="text-xl font-semibold text-primary mb-6">
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <Badge key={tech} variant="accent">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <h3 className="text-sm font-medium text-primary mb-4">
                      Have a similar project?
                    </h3>
                    <Button asChild className="w-full">
                      <Link href="/contact">
                        Start a Project
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
