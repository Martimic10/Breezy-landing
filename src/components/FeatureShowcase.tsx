"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { PhoneMockup } from "./iPhoneMockup";

const features: {
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  framed?: boolean;
  imageClass?: string;
  clipTop?: number;
}[] = [
  {
    headline: "Create groups for anything.",
    description:
      "From golf trips and vacations to roommates and events, organize expenses in dedicated groups and keep everyone on the same page.",
    image: "/Groups-newmockup.png",
    imageAlt: "Breezy Groups screen showing shared expense groups",
    framed: true,
    imageClass: "object-cover object-top",
  },
  {
    headline: "Keep track of friends.",
    description:
      "View balances, shared groups, and activity with the people you split expenses with most.",
    image: "/friends-newmockup.png",
    imageAlt: "Breezy Friends screen showing outstanding balances",
    framed: true,
    imageClass: "object-cover object-top",
    clipTop: 9,
  },
  {
    headline: "Add expenses in seconds.",
    description:
      "Record who paid, choose how to split the cost, and let Breezy handle the math automatically.",
    image: "/Add-Expense-mockup.png",
    imageAlt: "Breezy Add Expense screen for logging shared costs",
  },
  {
    headline: "Settle up with confidence.",
    description:
      "Pay friends using Venmo, Cash App, PayPal, or Zelle and keep balances accurate and organized.",
    image: "/Settle-Up-mockup.png",
    imageAlt: "Breezy Settle Up screen with payment options",
  },
];

function MockupScreenImage({
  src,
  alt,
  className = "object-cover object-top",
  clipTop = 0,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  clipTop?: number;
  priority?: boolean;
}) {
  const image = (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="300px"
      className={className}
      priority={priority}
    />
  );

  if (clipTop <= 0) return image;

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#f5f5f7]">
      <div
        className="absolute inset-x-0 bottom-0 overflow-hidden"
        style={{ top: `${clipTop}%` }}
      >
        <div className="relative h-full w-full">{image}</div>
      </div>
    </div>
  );
}

function FeatureTrigger({
  index,
  onActive,
}: {
  index: number;
  onActive: (index: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: "-40% 0px -40% 0px",
  });

  useEffect(() => {
    if (isInView) onActive(index);
  }, [isInView, index, onActive]);

  return (
    <div
      ref={ref}
      className="absolute left-0 w-full"
      style={{ top: `${index * 100}vh`, height: "100vh" }}
      aria-hidden="true"
    />
  );
}

export function FeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleActive = useCallback((index: number) => setActiveIndex(index), []);

  return (
    <section id="features" className="relative mt-36 pt-20 pb-24 md:mt-0 md:pt-0 md:pb-0">
      <div
        className="relative"
        style={{ height: `${features.length * 100}vh` }}
      >
        {features.map((_, i) => (
          <FeatureTrigger key={i} index={i} onActive={handleActive} />
        ))}

        <div className="sticky top-[6rem] z-10 flex min-h-[calc(100dvh-6rem)] items-start pt-10 pb-10 md:top-0 md:h-screen md:min-h-0 md:items-center md:pt-0 md:pb-0">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-6 md:gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -28 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="mb-6 flex gap-2 md:mb-4">
                    {features.map((_, i) => (
                      <motion.div
                        key={i}
                        layout
                        className={`h-1 rounded-full ${
                          i === activeIndex ? "bg-breezy-green" : "bg-black/10"
                        }`}
                        animate={{ width: i === activeIndex ? 32 : 16 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      />
                    ))}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
                    {features[activeIndex].headline}
                  </h2>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-black/50 sm:mt-4 sm:text-lg">
                    {features[activeIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="order-1 flex justify-center pt-4 lg:order-2 lg:pt-0">
              <div className="relative h-[640px] w-[280px] sm:h-[660px] sm:w-[300px]">
                {features.map((feature, i) => {
                  const isActive = i === activeIndex;

                  return (
                    <motion.div
                      key={feature.headline}
                      className="absolute inset-0 flex items-center justify-center"
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scale: isActive ? 1 : 0.96,
                        y: isActive ? 0 : 12,
                      }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      style={{ pointerEvents: isActive ? "auto" : "none" }}
                    >
                      {feature.framed ? (
                        <PhoneMockup>
                          <MockupScreenImage
                            src={feature.image}
                            alt={feature.imageAlt}
                            className={feature.imageClass ?? "object-cover object-top"}
                            clipTop={feature.clipTop}
                            priority={i <= 1}
                          />
                        </PhoneMockup>
                      ) : (
                        <Image
                          src={feature.image}
                          alt={feature.imageAlt}
                          width={300}
                          height={650}
                          className="h-auto w-full drop-shadow-2xl drop-shadow-black/15"
                          priority={i <= 1}
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
