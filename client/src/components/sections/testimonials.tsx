"use client";

import { motion } from "framer-motion";
import { Quote, AlertTriangle } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Testimonials() {
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
            What Our Clients Say
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/30"
            >
              {testimonial.isPlaceholder && (
                <div className="absolute right-3 top-3">
                  <span className="inline-flex items-center gap-1 rounded-md bg-yellow-500/10 border border-yellow-500/20 px-2 py-0.5 text-[10px] font-medium text-yellow-500">
                    <AlertTriangle className="h-3 w-3" />
                    Placeholder
                  </span>
                </div>
              )}

              <Quote className="mb-4 h-8 w-8 text-accent/30" />

              <p className="text-sm leading-relaxed text-secondary-text">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-medium text-primary">
                  {testimonial.name}
                </p>
                <p className="mt-0.5 text-xs text-secondary-text">
                  {testimonial.role}
                  {testimonial.company !== "Company Placeholder" && (
                    <span> at {testimonial.company}</span>
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center text-xs text-secondary-text/50"
        >
          Placeholder testimonials &ndash; to be updated with real client
          feedback
        </motion.p>
      </div>
    </section>
  );
}
