"use client";

import { motion } from "framer-motion";
import { Users, Receipt, Scale, HandCoins } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { ScrollReveal } from "./ScrollReveal";

const steps = [
  {
    icon: Users,
    step: "Step 1",
    title: "Create",
    subtitle: "Start a shared group",
    body: "Set up a trip, event, or roommate group in seconds. Invite friends and everyone stays on the same page.",
    accent: "text-breezy-green",
  },
  {
    icon: Receipt,
    step: "Step 2",
    title: "Track",
    subtitle: "Log what everyone paid",
    body: "Add expenses as they happen. Choose who paid and how to split — Breezy handles the math automatically.",
    accent: "text-breezy-green-dark",
  },
  {
    icon: Scale,
    step: "Step 3",
    title: "Balance",
    subtitle: "See who owes what",
    body: "Breezy calculates everyone's share in real time so you always know exactly where things stand.",
    accent: "text-emerald-500",
  },
  {
    icon: HandCoins,
    step: "Step 4",
    title: "Settle",
    subtitle: "Pay friends and close out",
    body: "Settle up via Venmo, Cash App, PayPal, or Zelle and keep your balances accurate and organized.",
    accent: "text-emerald-600",
  },
];

export function HowItWorks() {
  return (
    <section className="pt-32 pb-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-bold tracking-tight text-black sm:text-4xl">
            How Breezy Works
          </h2>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px", amount: 0.1 }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step) => (
            <motion.div
              key={step.step}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="group flex min-h-[300px] flex-col rounded-3xl bg-[#f2f2f2] p-4 transition-[min-height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:min-h-[380px] focus-within:min-h-[380px] sm:min-h-[320px] sm:hover:min-h-[400px] sm:focus-within:min-h-[400px]"
              tabIndex={0}
            >
              <div className="flex flex-col items-center px-2 pt-10 pb-8">
                <step.icon
                  className={`h-7 w-7 stroke-[1.75] ${step.accent}`}
                />
                <span className={`mt-4 text-base font-bold ${step.accent}`}>
                  {step.step}
                </span>
              </div>

              <div className="mt-auto rounded-2xl bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:p-6 group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] group-focus-within:p-6 group-focus-within:shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                <h3
                  className={`text-lg font-bold tracking-tight ${step.accent}`}
                >
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-black/45">{step.subtitle}</p>

                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="mt-0 text-sm leading-relaxed text-black/60 opacity-0 transition-all duration-500 group-hover:mt-4 group-hover:opacity-100 group-focus-within:mt-4 group-focus-within:opacity-100">
                      {step.body}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
