"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { Badge } from "@/components/ui/badge";

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

const categories = ["All", "Development", "Mobile", "AI", "Design", "Backend", "DevOps"];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <section className="min-h-screen border-t border-border pb-32 pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
        
            
           
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-12 justify-center"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-accent text-background"
                    : "bg-card text-secondary-text hover:text-primary hover:bg-card/80 border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredPosts.map((post) => {
                const slugMap: Record<string, string> = {
                  "custom-software-development": "custom-software",
                  "web-development": "web-development",
                  "mobile-app-development": "mobile-development",
                  "ai-development": "ai-development",
                  "ui-ux-design": "ui-ux-design",
                  "backend-api-development": "backend-api",
                  "cloud-devops": "cloud-devops",
                };
                return (
                <motion.div key={post.slug} variants={itemVariants} layout>
                  <Link href={`/services/${slugMap[post.slug] || post.slug}`} className="block h-full">
                    <article className="group h-full rounded-2xl border border-border bg-card overflow-hidden hover:border-accent/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.04)] transition-all duration-300">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3">
                          <Badge variant="accent">{post.category}</Badge>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-sm text-secondary-text line-clamp-3">
                          {post.description}
                        </p>
                        <div className="mt-4 flex items-center gap-4 text-xs text-secondary-text">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {post.readTime}
                          </span>
                        </div>
                        <div className="mt-4 flex items-center text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                          Read more
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              );
            })}
            </motion.div>
          </AnimatePresence>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-secondary-text text-lg">
                No posts in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
