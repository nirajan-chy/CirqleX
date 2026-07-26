"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ServicesGrid() {
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
            What We Build
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-secondary-text">
            End-to-end digital product engineering, from concept to launch and
            beyond.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isWide = index === 0;

            return (
              <motion.div
                key={service.slug}
                variants={itemVariants}
                className={cn(
                  "group relative",
                  isWide && "md:col-span-2 lg:col-span-2"
                )}
              >
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/50 hover:scale-[1.02]">
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-accent transition-colors duration-300 group-hover:bg-accent/10">
                        <Icon className="h-5 w-5" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-secondary-text opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent group-hover:opacity-100" />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-primary">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-secondary-text">
                      {service.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="default"
                          className="text-[11px]"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
