"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const faqs = [
  {
    question: "What makes Breezy different from Splitwise?",
    answer:
      "Breezy is built for speed and simplicity. Add expenses in seconds, settle up with your favorite payment apps, and enjoy a clean, modern interface designed for how people actually split costs today.",
  },
  {
    question: "Can I use Breezy for free?",
    answer:
      "Yes. Breezy is completely free with unlimited groups, expenses, friends, and settlements. Breezy Pro adds premium features like trip reports and spending insights for $4.99/month.",
  },
  {
    question: "How do payments work?",
    answer:
      "Breezy integrates with Venmo, Cash App, PayPal, and Zelle. When you settle up, Breezy opens your preferred app with the correct amount — then records the payment to keep balances accurate.",
  },
  {
    question: "Do my friends need Breezy?",
    answer:
      "Friends get the best experience with the app, but you can add anyone to a group. They'll receive notifications and can view balances without creating an account.",
  },
  {
    question: "What devices are supported?",
    answer:
      "Breezy is available on iPhone with an Android version coming soon. Your data syncs across all your devices automatically.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. All data is encrypted in transit and at rest. We never sell your information, and you can export or delete your data at any time.",
  },
];

function FAQItem({
  index,
  question,
  answer,
  isOpen,
  onToggle,
}: {
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <div
      className={`rounded-[2rem] bg-[#f2f2f2] transition-colors duration-300 ${
        isOpen ? "bg-[#ededed]" : ""
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center gap-5 px-6 py-5 text-left sm:gap-8 sm:px-8 sm:py-6"
      >
        <span className="w-10 shrink-0 text-3xl font-black italic tracking-tight text-black/25 sm:text-4xl">
          {number}
        </span>
        <span className="flex-1 text-base font-medium text-black sm:text-lg">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0"
        >
          <ArrowUpRight className="h-5 w-5 text-black" strokeWidth={1.5} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 pl-[4.5rem] text-sm leading-relaxed text-black/50 sm:px-8 sm:pb-7 sm:pl-[5.5rem] sm:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Questions? We have answers.
          </h2>
        </ScrollReveal>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px", amount: 0.1 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 space-y-3 sm:mt-16 sm:space-y-4"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              index={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
