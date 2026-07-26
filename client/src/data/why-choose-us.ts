import type { WhyChooseUsItem } from "@/lib/types";
import {
  Lightbulb,
  Cpu,
  Shield,
  Scaling,
  Eye,
  Handshake,
} from "lucide-react";

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    title: "Business-First Thinking",
    description:
      "We start with your business goals, not just technical requirements. Every decision is tied to measurable outcomes.",
    icon: Lightbulb,
  },
  {
    title: "Modern Engineering",
    description:
      "We use current, battle-tested technologies and engineering practices that ensure maintainability and performance.",
    icon: Cpu,
  },
  {
    title: "Security by Design",
    description:
      "Security is embedded from day one, not bolted on as an afterthought. We follow industry best practices and standards.",
    icon: Shield,
  },
  {
    title: "Built to Scale",
    description:
      "Architecture decisions today are made with tomorrow's growth in mind, ensuring your product can evolve.",
    icon: Scaling,
  },
  {
    title: "Transparent Process",
    description:
      "You always know what we're working on, why, and how it's progressing. No surprises, no black boxes.",
    icon: Eye,
  },
  {
    title: "Long-Term Partnership",
    description:
      "We build relationships, not just software. Our clients return because we invest in their long-term success.",
    icon: Handshake,
  },
];
