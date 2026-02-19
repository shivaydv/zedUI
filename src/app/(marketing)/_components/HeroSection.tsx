"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { cn } from "@/utils/cn";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section ref={containerRef} className="relative pt-40 pb-32 px-6 overflow-hidden">
      {/* Moody Aesthetic Background */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-foreground/2 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-foreground/2 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--border)_1px,transparent_1px)] bg-size-[64px_64px] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Top Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16 mb-24">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tighter leading-[0.95] text-foreground">
              Ship Polished
              <br />
              Interfaces Effortlessly.
            </h1>
          </motion.div>

          <motion.div
            className="max-w-xs text-muted-foreground/50 text-[14px] leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          >
            <div className="space-y-4">
              <p className="border-l border-border pl-6">
                Animated, production-ready UI blocks for modern product interfaces.
              </p>
              <div className="size-2 bg-foreground/10 rounded-full animate-pulse ml-6" />
            </div>
          </motion.div>
        </div>

        {/* Hero Visuals - Moody Aesthetic Mix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            style={{ y: y1 }}
            className="aspect-4/5 relative overflow-hidden bg-muted/20 rounded-3xl group"
          >
            <Image
              src="/dummy-images/hero1.avif"
              alt="Abstract Moody 1"
              fill
              className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
            />
          </motion.div>

          <motion.div
            style={{ y: y3 }}
            className="aspect-4/5 relative overflow-hidden bg-muted/20 rounded-3xl shadow-2xl group"
          >
            <Image
              src="/dummy-images/hero2.avif"
              alt="Abstract Moody 2"
              fill
              className="object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
            />
          </motion.div>

          <motion.div
            style={{ y: y2 }}
            className="aspect-4/5 relative overflow-hidden bg-muted/20 rounded-3xl group"
          >
            <Image
              src="/dummy-images/hero3.avif"
              alt="Abstract Moody 3"
              fill
              className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
