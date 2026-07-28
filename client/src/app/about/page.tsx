"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Target, Zap, Users, TrendingUp } from "lucide-react";
import { whyChooseUsItems } from "@/data/why-choose-us";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Engineering Excellence",
    description:
      "We hold ourselves to the highest technical standards. Clean code, robust architecture, and thorough testing are non-negotiable.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We stay at the forefront of technology, continuously evaluating and adopting tools and practices that deliver better outcomes.",
  },
  {
    icon: Users,
    title: "Business Understanding",
    description:
      "Technology serves business goals. We invest time in understanding your domain, users, and competitive landscape.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Partnership",
    description:
      "We build lasting relationships with our clients, supporting their growth long after the initial project is delivered.",
  },
];

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

export default function AboutPage() {
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
              About
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              About CirqleX
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary-text">
              Professional digital product engineering and technology partner.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl font-bold tracking-tight text-primary">
              Our Mission
            </h2>
            <p className="mt-6 text-lg text-secondary-text leading-relaxed">
              We build software that moves businesses forward. CirqleX is a
              digital product engineering company focused on delivering
              high-quality, scalable technology solutions. We partner with
              startups, SMEs, and enterprises to design, build, and support
              software that creates real business value.
            </p>
            <p className="mt-4 text-lg text-secondary-text leading-relaxed">
              Our team combines deep engineering expertise with practical business
              understanding, ensuring every project we take on is built on a
              solid technical foundation and aligned with measurable outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-primary">
              Our Values
            </h2>
            <p className="mt-4 text-secondary-text">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div key={value.title} variants={itemVariants}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold text-primary">
                        {value.title}
                      </h3>
                      <p className="mt-2 text-sm text-secondary-text">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-primary">
              Why Choose Us
            </h2>
            <p className="mt-4 text-secondary-text">
              What sets us apart from the competition.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {whyChooseUsItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} variants={itemVariants}>
                  <Card className="h-full hover:border-accent/50 transition-colors duration-300">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-secondary-text">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section id="careers" className="py-20 md:py-28 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-primary">
              Our Team
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-secondary-text">
              Our team is building this section. Check back soon to learn more
               about the people behind CirqleX.
            </p>
            <Badge variant="default" className="mt-4">
              Coming Soon
            </Badge>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-primary">
              Work with Us
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-secondary-text">
              Ready to start your next project? Let&apos;s discuss how we can
              help.
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
