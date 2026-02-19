"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface Section {
    title: string;
    description: string;
    color: string;
    id: string;
}

interface StackedSectionsProps {
    sections: Section[];
    className?: string;
}

export function StackedSections({ sections, className }: StackedSectionsProps) {
    return (
        <div className={cn("relative w-full", className)}>
            {sections.map((section, index) => (
                <SectionCard
                    key={section.id}
                    section={section}
                    index={index}
                    total={sections.length}
                />
            ))}
        </div>
    );
}

function SectionCard({
    section,
    index,
    total
}: {
    section: Section;
    index: number;
    total: number
}) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

    return (
        <div
            ref={container}
            className="sticky top-0 h-[90vh] w-full flex items-center justify-center"
        >
            <motion.div
                style={{
                    scale,
                    opacity,
                    backgroundColor: section.color,
                    top: `calc(-5% + ${index * 25}px)`,
                }}
                className="relative h-[70vh] w-full max-w-5xl rounded-3xl p-10 flex flex-col justify-between shadow-2xl border border-white/10"
            >
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        {section.title}
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 max-w-lg leading-relaxed">
                        {section.description}
                    </p>
                </div>

                <div className="flex justify-between items-end">
                    <span className="text-8xl font-black text-white/10 select-none">
                        0{index + 1}
                    </span>
                    <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
