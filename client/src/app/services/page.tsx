"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Badge variant="accent" className="mb-4">
              Services
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Our Services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary-text">
              End-to-end digital product engineering services.
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
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.slug} variants={itemVariants}>
                  <Link href={`/services/${service.slug}`} className="block h-full">
                    <Card className="group h-full hover:border-accent/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                        <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-sm text-secondary-text">
                          {service.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {service.tags.map((tag) => (
                            <Badge key={tag} variant="default">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="mt-4 flex items-center text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                          Learn more
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 text-center"
          >
            <h2 className="text-2xl font-bold text-primary">
              Not sure what you need?
            </h2>
            <p className="mt-2 text-secondary-text">
              Let&apos;s discuss your project and find the right approach.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
