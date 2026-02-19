"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/utils/cn";

export function FeedbacksSection() {
  return (
    <section className="relative w-full py-24">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-12">
        <div className="size-12 rounded-full bg-muted/20 flex items-center justify-center">
          <span className="text-[10px] font-mono text-muted-foreground">05</span>
        </div>

        <motion.p
          className="text-2xl sm:text-3xl font-light leading-relaxed text-foreground italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          "Zed UI is an ultra-aesthetic interface library. Promising when built as
          an abstract layer on top of your existing design system."
        </motion.p>

        <div className="flex flex-col items-center gap-4">
          <Image
            src="https://github.com/guilhermerodz.png"
            alt="Guilherme Rodz"
            width={56}
            height={56}
            className="grayscale rounded-full border border-border"
          />
          <div className="flex flex-col">
            <span className="text-[14px] font-medium text-foreground uppercase tracking-widest">
              Guilherme Rodz
            </span>
            <span className="text-[11px] text-muted-foreground uppercase tracking-widest">
              Creator of Input-OTP
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
