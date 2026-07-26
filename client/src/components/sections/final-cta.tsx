"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-center sm:p-12"
        >
          <div className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Have a Product Idea?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-secondary-text">
              Tell us what you&apos;re building. We&apos;ll help you understand
              the technical path, define the scope, and plan the next step.
            </p>

            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/contact" className="gap-2">
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
