"use client";

import { motion } from "motion/react";
import { cn } from "@/utils/cn";

const PROCESS_STEPS = [
    {
        id: "01",
        label: "Discovery",
        title: "Reverse Engineering",
        description: "We deconstruct existing manual processes into clean, programmable logic gates.",
    },
    {
        id: "02",
        label: "Architecture",
        title: "Stealth Infrastructure",
        description: "Building resilient data tunnels that operate below the noise floor of standard ops.",
    },
    {
        id: "03",
        label: "Execution",
        title: "Autonomous Flow",
        description: "Deployment of self-correcting agents that manage complex production cycles.",
    },
];

export function ProcessSection() {
    return (
        <section className="relative py-32 overflow-hidden">
            <div className="flex flex-col gap-24">
                <div className="flex flex-col gap-4 max-w-2xl">
                    <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-muted-foreground/50">
                        Workflow // Protocol
                    </span>
                    <h2 className="text-4xl font-medium tracking-tight text-foreground uppercase leading-[0.9]">
                        The Engineering
                        <br />
                        Process
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border/20 border-y border-border/20">
                    {PROCESS_STEPS.map((step, idx) => (
                        <div key={idx} className="bg-background flex flex-col gap-12 p-12 relative group hover:bg-muted/5 transition-colors duration-500">
                            {/* Step Indicator */}
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-mono tracking-[0.5em] text-foreground font-bold">
                                    STEP / {step.id}
                                </span>
                                <div className="size-2 bg-foreground/10 group-hover:bg-foreground transition-all duration-700 rotate-45" />
                            </div>

                            <div className="space-y-4">
                                <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                                    {step.label}
                                </span>
                                <h3 className="text-xl font-medium tracking-tight text-foreground uppercase">
                                    {step.title}
                                </h3>
                                <p className="text-[13px] text-muted-foreground leading-relaxed max-w-xs font-light">
                                    {step.description}
                                </p>
                            </div>

                            {/* Hover Micro-interaction: Sliding Scanning Line */}
                            <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-foreground transition-all duration-700 group-hover:w-full" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute right-0 top-0 h-full w-1/3 opacity-[0.02] pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--foreground)_1px,transparent_1px)] bg-size-[40px_40px]" />
            </div>
        </section>
    );
}
