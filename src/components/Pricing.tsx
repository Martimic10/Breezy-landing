"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { ScrollReveal } from "./ScrollReveal";

const plans = [
  {
    badge: "Free",
    badgeClass: "bg-black text-white",
    description:
      "Start splitting expenses completely free with $0 upfront or ongoing costs.",
    price: "Free Forever",
    priceClass: "text-black",
    footer:
      "Use Breezy completely for free with unlimited groups, expenses, friends, and settlements.",
    footerBold: false,
  },
  {
    badge: "Pro",
    badgeClass: "badge-gradient-green text-white",
    description:
      "Get more from every trip — insights, reports, and premium features to stay organized.",
    price: "$4.99/month",
    priceClass: "text-gradient-green",
    footer:
      "Trip reports, spending insights, CSV export, group cover photos, and future premium features.",
    footerBold: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-[#f5f5f5] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Simple Pricing
          </h2>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px", amount: 0.1 }}
          className="mx-auto mt-16 grid max-w-5xl gap-5 sm:grid-cols-2"
        >
          {plans.map((plan) => (
            <motion.a
              key={plan.badge}
              href="#cta"
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex min-h-[400px] flex-col justify-between rounded-[2rem] bg-white p-8 sm:min-h-[440px] sm:p-10"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold tracking-tight text-black">
                    Breezy.
                  </span>
                  <span
                    className={`rounded-full px-3.5 py-1 text-xs font-semibold ${plan.badgeClass}`}
                  >
                    {plan.badge}
                  </span>
                </div>
                <p className="mt-5 max-w-xs text-sm leading-relaxed text-black/45">
                  {plan.description}
                </p>
              </div>

              <div>
                <p
                  className={`text-4xl font-bold tracking-tight sm:text-[2.75rem] sm:leading-tight ${plan.priceClass}`}
                >
                  {plan.price}
                </p>
                <p
                  className={`mt-4 max-w-sm text-sm leading-relaxed ${
                    plan.footerBold
                      ? "font-semibold text-black"
                      : "text-black/45"
                  }`}
                >
                  {plan.footer}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
