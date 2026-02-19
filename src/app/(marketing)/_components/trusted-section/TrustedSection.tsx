"use client";

import { motion } from "motion/react";
import { cn } from "@/utils/cn";

const TECH_STACK = [
    { name: "React" },
    { name: "TypeScript" },
    { name: "Next.js" },
    { name: "Tailwind CSS" },
    { name: "Framer Motion" },
    { name: "Radix UI" },
];

export function TrustedSection() {
    return (
        <div className="w-full py-16 border-y border-border/10 bg-muted/2">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground/60">
                    Built with
                </span>
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-40 hover:opacity-100 transition-opacity duration-700">
                    {TECH_STACK.map((tech, idx) => (
                        <span
                            key={idx}
                            className="text-[13px] font-medium tracking-tight text-foreground transition-colors hover:text-foreground"
                        >
                            {tech.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
