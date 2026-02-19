"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PREVIEW_CARDS = [
  {
    image: "/dummy-images/cta1.avif",
    rotate: -18,
    x: "-25%",
    duration: 5,
  },
  {
    image: "/dummy-images/cta3.avif",
    rotate: 0,
    x: "0%",
    duration: 7,
  },
  {
    image: "/dummy-images/cta1.avif",
    rotate: 18,
    x: "25%",
    duration: 6,
  },
];

export function SloganSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Keep a gentle parallax for the whole group
  const groupY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={containerRef} className="relative w-full py-20 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Moody Aesthetic Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--foreground)_0.5px,transparent_0.5px)] bg-size-[40px_40px] opacity-5" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-foreground/4 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">

        {/* Fanned Cards Mockup - Continuous Motion Restored */}
        <motion.div
          className="relative w-full h-40 mb-16 flex items-center justify-center"
          style={{ y: groupY }}
        >
          {PREVIEW_CARDS.map((card, idx) => (
            <motion.div
              key={idx}
              className={cn(
                "absolute size-32 sm:size-40 rounded-2xl border border-white/10 bg-background shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden group",
                idx === 1 ? "z-20" : "z-10"
              )}
              initial={{ opacity: 0, scale: 0.9, rotate: card.rotate, x: card.x }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              animate={{
                y: [0, -10, 0],
                rotate: [card.rotate, card.rotate + (idx % 2 === 0 ? 1 : -1), card.rotate],
              }}
              transition={{
                y: {
                  duration: card.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.5,
                },
                rotate: {
                  duration: card.duration + 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                opacity: { duration: 1 },
                scale: { duration: 1 }
              }}
              viewport={{ once: false }}
            >
              <Image
                src={card.image}
                alt="Digital Interface Preview"
                fill
                className="object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-foreground/10 bg-foreground/3 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live Components Ready
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium tracking-tight text-foreground leading-[1.2] max-w-xl mx-auto">
            Build something
            <br />
            truly <span className="text-muted-foreground/40 italic">unforgettable.</span>
          </h2>

          <div className="flex flex-col items-center pt-2">
            <Link
              href="/docs/installation"
              className={cn(
                "group relative inline-flex items-center gap-3 px-10 py-3 bg-foreground text-background text-[14px] font-bold transition-all duration-500",
                "hover:shadow-[0_0_40px_rgba(var(--foreground),0.1)] active:scale-[0.98] rounded-full overflow-hidden"
              )}
            >
              <span className="relative z-10 flex items-center gap-2">
                Get started free <MoveRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
