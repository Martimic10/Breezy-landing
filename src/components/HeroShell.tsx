"use client";

import { Navbar } from "./Navbar";
import { Hero } from "./Hero";

export function HeroShell() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/Breezy-hero-background.png)" }}
        aria-hidden="true"
      />
      {/* Light overlays — keep image visible */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-white/15 to-white/5"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/25 via-transparent to-white/15"
        aria-hidden="true"
      />
      {/* Bottom fade into rest of page */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent sm:h-56"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
