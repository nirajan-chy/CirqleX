"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/9761473663";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-[70]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-5 right-5 z-[80] flex flex-col items-end gap-4 sm:bottom-7 sm:right-7">
        <AnimatePresence>
          {open && (
            <motion.div
              key="card"
              initial={{ opacity: 0, y: 24, scale: 0.9, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 16, scale: 0.92, filter: "blur(4px)" }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              className="w-[calc(100vw-2.5rem)] max-w-[360px] overflow-hidden rounded-3xl border border-border/80 bg-[#0A0F0B] shadow-[0_24px_80px_-12px_rgba(37,211,102,0.3)]"
            >
              <div className="flex items-center gap-3 bg-[radial-gradient(120%_140%_at_0%_0%,rgba(37,211,102,0.18)_0%,transparent_55%)] px-4 py-3.5">
                <div className="relative shrink-0">
                  <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-card ring-2 ring-[#25D366]/50">
                    <Image
                      src="/images/logo.png"
                      alt="CirqleX"
                      width={44}
                      height={44}
                      className="scale-150 -translate-y-0.5 object-contain"
                    />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-[#25D366] ring-2 ring-[#0A0F0B]" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-white">CirqleX</p>
                  <p className="flex items-center gap-1.5 text-xs text-white/50">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                    Online - replies within minutes
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close chat"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="px-4 py-4">
                <div className="relative max-w-[88%] rounded-2xl rounded-bl-md bg-[#151F18] px-4 py-3 text-sm leading-relaxed text-white/90 shadow-lg shadow-black/30">
                  <p className="text-[13px] font-semibold text-[#25D366]">
                    CirqleX Support
                  </p>
                  <p className="mt-1">
                    Hey there! Got a project in mind? Send us a message on
                    WhatsApp and we&apos;ll get back to you right away.
                  </p>
                  <span className="mt-2 block text-right text-[10px] font-medium text-white/30">
                    Just now
                  </span>
                  <span className="absolute -bottom-px -left-[7px] border-b-[12px] border-l-[10px] border-b-[#151F18] border-l-transparent" />
                </div>
              </div>

              <div className="px-4 pb-4">
                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-br from-[#2EE06A] to-[#1EBE5D] py-3.5 text-sm font-bold text-white shadow-lg shadow-[#25D366]/30"
                >
                  <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.35)_50%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:animate-[shimmer_1.2s_ease-in-out] group-hover:opacity-100" />
                  <WhatsAppIcon className="h-5 w-5" />
                  Start Chat on WhatsApp
                </motion.a>
                <p className="mt-2.5 text-center text-[11px] text-white/35">
                  Typically replies in under an hour
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setOpen((o) => !o)}
          aria-label="Chat with us on WhatsApp"
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.5 }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#2EE06A] to-[#1EBE5D] text-white shadow-[0_12px_32px_-6px_rgba(37,211,102,0.55)] ring-1 ring-white/10 transition-shadow duration-300 hover:shadow-[0_16px_44px_-6px_rgba(37,211,102,0.7)]"
        >
          <motion.span
            className="absolute inset-0 rounded-full bg-[#25D366]"
            animate={{ scale: [1, 1.65], opacity: [0.45, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.span
            className="absolute inset-0 rounded-full bg-[#25D366]/50"
            animate={{ scale: [1, 1.3], opacity: [0.35, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
          />
          <WhatsAppIcon className="relative h-7 w-7" />
        </motion.button>
      </div>
    </>
  );
}
