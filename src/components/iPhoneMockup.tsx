"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface iPhoneMockupProps {
  children: ReactNode;
  className?: string;
  scale?: number;
}

export function PhoneMockup({
  children,
  className = "",
  scale = 1,
}: iPhoneMockupProps) {
  return (
    <motion.div
      className={`relative mx-auto ${className}`}
      style={{ transform: `scale(${scale})` }}
    >
      <div className="relative mx-auto w-[280px] sm:w-[300px]">
        {/* Phone frame */}
        <div className="relative rounded-[3rem] border-[6px] border-[#1a1a1a] bg-[#1a1a1a] shadow-2xl shadow-black/20">
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 z-20 h-[26px] w-[90px] -translate-x-1/2 rounded-full bg-black" />

          {/* Screen */}
          <div className="overflow-hidden rounded-[2.6rem] bg-white">
            <div className="relative aspect-[9/19.5] w-full overflow-hidden">
              {children}
            </div>
          </div>

          {/* Side button */}
          <div className="absolute top-28 -right-[8px] h-16 w-[3px] rounded-r-sm bg-[#2a2a2a]" />
          <div className="absolute top-20 -left-[8px] h-8 w-[3px] rounded-l-sm bg-[#2a2a2a]" />
          <div className="absolute top-32 -left-[8px] h-12 w-[3px] rounded-l-sm bg-[#2a2a2a]" />
          <div className="absolute top-48 -left-[8px] h-12 w-[3px] rounded-l-sm bg-[#2a2a2a]" />
        </div>
      </div>
    </motion.div>
  );
}
