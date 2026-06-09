"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled ? "px-0 pt-0" : "px-4 pt-4 sm:px-6 sm:pt-5"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl transition-all duration-500 ${
          scrolled
            ? "rounded-none border-b border-black/[0.06] bg-white/80 shadow-sm shadow-black/[0.04] backdrop-blur-2xl"
            : "rounded-2xl border border-white/60 bg-white/40 shadow-[0_8px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
        }`}
      >
        <nav className="flex items-center justify-between px-5 py-3.5 sm:px-6">
          <a href="#" aria-label="Breezy home" className="shrink-0">
            <Logo />
          </a>

          <div className="hidden items-center gap-2 md:flex">
            <div className="flex items-center gap-1 rounded-full bg-black/[0.04] p-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-black/65 transition-all hover:bg-white/70 hover:text-black"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="#cta"
              className="ml-2 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-black/15 transition-all hover:bg-black/85 hover:shadow-lg hover:shadow-black/20"
            >
              Join the Beta
            </a>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.08] bg-white/50 backdrop-blur-sm transition-colors hover:bg-white/80 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-black/[0.06] md:hidden"
            >
              <div className="flex flex-col gap-1 px-4 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-black/70 transition-colors hover:bg-black/[0.04] hover:text-black"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#cta"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 rounded-full bg-black px-5 py-3 text-center text-sm font-semibold text-white"
                >
                  Join the Beta
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
