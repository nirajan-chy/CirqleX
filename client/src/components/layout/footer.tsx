"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";
import {
  FOOTER_COMPANY,
  FOOTER_SERVICES,
  FOOTER_SOLUTIONS,
  FOOTER_RESOURCES,
  CONTACT_INFO,
} from "@/lib/constants";
import { Separator } from "@/components/ui/separator";

const footerSections = [
  { title: "Company", links: FOOTER_COMPANY },
  { title: "Services", links: FOOTER_SERVICES },
  { title: "Solutions", links: FOOTER_SOLUTIONS },
  { title: "Resources", links: FOOTER_RESOURCES },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative h-8 w-8 overflow-hidden rounded-lg">
                <Image
                  src="/logo.svg"
                  alt={SITE_NAME}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold text-primary tracking-tight">
                {SITE_NAME}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-secondary-text leading-relaxed">
              Professional digital product engineering and technology partner.
              Building software that moves businesses forward.
            </p>
            <div className="mt-6 space-y-2">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="block text-sm text-secondary-text hover:text-accent transition-colors"
              >
                {CONTACT_INFO.email}
              </a>
              <p className="text-sm text-secondary-text">
                {CONTACT_INFO.location}
              </p>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-primary mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-secondary-text hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator />

        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-secondary-text">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs text-secondary-text hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-secondary-text hover:text-accent transition-colors"
            >
              Terms of Service
            </Link>
            <button
              onClick={scrollToTop}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-secondary-text hover:text-accent hover:border-accent transition-all cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
