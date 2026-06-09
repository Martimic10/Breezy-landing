"use client";

import { motion } from "framer-motion";
import { PhoneMockup } from "./iPhoneMockup";
import { GroupsScreen } from "./screens/GroupsScreen";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const floatingCards = [
  {
    label: "Balance",
    value: "+$42.50",
    sub: "Ski Trip",
    position: "top-[12%] -left-[8%] sm:-left-[12%]",
    delay: 0.8,
  },
  {
    label: "Settlement",
    value: "Paid $24.50",
    sub: "via Venmo",
    position: "top-[35%] -right-[6%] sm:-right-[10%]",
    delay: 1.0,
  },
  {
    label: "Expense",
    value: "Dinner $60",
    sub: "Split 4 ways",
    position: "bottom-[18%] -left-[4%] sm:-left-[8%]",
    delay: 1.2,
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-1.5 text-xs font-medium text-breezy-green-dark shadow-sm backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-breezy-green" />
              Now in Beta
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-black drop-shadow-[0_1px_12px_rgba(255,255,255,0.8)] sm:text-6xl lg:text-7xl"
          >
            Split expenses
            <br />
            <span className="text-black/50">without the headache.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-black/60 sm:text-lg"
          >
            The easiest way to split expenses with friends, roommates, trips,
            and events. Track who paid, settle balances, and stay organized in
            seconds.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#cta"
              className="group flex items-center gap-3 rounded-2xl bg-black px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/15 transition-all hover:bg-black/85 hover:shadow-xl hover:shadow-black/20"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on the App Store
            </a>
            <a
              href="#cta"
              className="rounded-2xl border border-white/50 bg-white/60 px-6 py-3.5 text-sm font-semibold text-black shadow-sm backdrop-blur-md transition-all hover:border-white/70 hover:bg-white/80"
            >
              Join the Beta
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-md sm:mt-20"
        >
          {floatingCards.map((card) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: card.delay,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`absolute z-10 hidden rounded-2xl border border-white/50 bg-white/75 px-4 py-3 shadow-lg shadow-black/8 backdrop-blur-md sm:block ${card.position}`}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: card.delay,
                }}
              >
                <p className="text-[10px] font-medium tracking-wide text-black/40 uppercase">
                  {card.label}
                </p>
                <p className="text-sm font-bold text-black">{card.value}</p>
                <p className="text-[11px] text-black/40">{card.sub}</p>
              </motion.div>
            </motion.div>
          ))}

          <PhoneMockup>
            <GroupsScreen />
          </PhoneMockup>
        </motion.div>
      </div>
    </section>
  );
}
