import { type LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  features: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  technologies: string[];
  result: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TechCategory {
  name: string;
  technologies: { name: string; description: string }[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  deliverables: string[];
  outcome: string;
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
  role: string;
  isPlaceholder: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}
