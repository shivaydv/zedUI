'use client';

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface BentoGridProps {
    children: React.ReactNode;
    className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
    return (
        <div
            className={cn(
                "grid w-full grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[18rem]",
                className
            )}
        >
            {children}
        </div>
    );
}

export interface BentoCardProps {
    name: string;
    className?: string;
    background?: React.ReactNode;
    Icon?: LucideIcon;
    description: string;
    href?: string;
    cta?: string;
}

export function BentoCard({
    name,
    className,
    background,
    Icon,
    description,
    href,
    cta = "Learn more",
}: BentoCardProps) {
    return (
        <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className={cn(
                "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl",
                "bg-white [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:bg-black dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
                "border border-neutral-200 dark:border-neutral-800",
                className
            )}
        >
            <div className="absolute inset-0 z-0">{background}</div>

            <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
                {Icon && (
                    <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75 dark:text-neutral-300" />
                )}
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
                    {name}
                </h3>
                <p className="max-w-lg text-neutral-400">{description}</p>
            </div>

            <div
                className={cn(
                    "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                )}
            >
                <button className="pointer-events-auto rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white dark:bg-neutral-100 dark:text-black">
                    {href ? (
                        <a href={href} className="flex items-center gap-2">
                            {cta}
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                            >
                                <path
                                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </a>
                    ) : (
                        cta
                    )}
                </button>
            </div>
            <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/3 group-hover:dark:bg-neutral-800/10" />
        </motion.div>
    );
}
