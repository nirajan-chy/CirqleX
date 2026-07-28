"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ServiceDetailProps {
  slug: string;
  title: string;
  description: string;
  features: string[];
  tags: string[];
}

export default function ServiceDetailClient({
  title,
  description,
  features,
  tags,
}: ServiceDetailProps) {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center text-sm text-secondary-text hover:text-accent transition-colors mb-8"
            >
              ← Back to Services
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
                  {title}
                </h1>
              </div>
            </div>
            <p className="text-lg text-secondary-text max-w-2xl">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-xl font-semibold text-primary mb-6">
                    What&apos;s Included
                  </h2>
                  <ul className="space-y-4">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                          <Check className="h-3 w-3 text-accent" />
                        </div>
                        <span className="text-secondary-text">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
                  <h2 className="text-xl font-semibold text-primary mb-6">
                    Technologies
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="accent">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <h3 className="text-sm font-medium text-primary mb-4">
                      Ready to get started?
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
