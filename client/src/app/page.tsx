import HeroSection from "@/components/hero/hero-section";
import { Capabilities } from "@/components/sections/capabilities";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { TechEcosystem } from "@/components/sections/tech-ecosystem";
import { CaseStudies } from "@/components/sections/case-studies";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";
import { ContactForm } from "@/components/sections/contact-form";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Capabilities />
      <WhyChooseUs />
      <ProcessTimeline />
      <TechEcosystem />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <ContactForm />
    </>
  );
}
