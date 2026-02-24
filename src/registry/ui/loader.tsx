"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type LoaderVariant = "orbital" | "morph";

interface LoaderProps {
    variant?: LoaderVariant;
    size?: number;
    className?: string;
    color?: string;
}

export function Loader({
    variant = "orbital",
    size = 40,
    className,
    color = "currentColor",
}: LoaderProps) {
    const containerStyle = {
        width: size,
        height: size,
    };

    const renderLoader = () => {
        switch (variant) {
            case "orbital":
                return <OrbitalLoader size={size} color={color} />;
            case "morph":
                return <MorphLoader size={size} color={color} />;
            default:
                return <OrbitalLoader size={size} color={color} />;
        }
    };

    return (
        <div
            style={containerStyle}
            className={cn("relative flex items-center justify-center", className)}
        >
            {renderLoader()}
        </div>
    );
}

function OrbitalLoader({ size, color }: { size: number; color: string }) {
    return (
        <div className="relative flex items-center justify-center">
            {[1, 0.7, 0.4].map((scale, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full border-[1.5px] border-transparent"
                    style={{
                        width: size * scale,
                        height: size * scale,
                        borderTopColor: color,
                        borderLeftColor: i === 1 ? color : "transparent",
                        opacity: 1 - i * 0.25,
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1 + i * 0.5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
}

function MorphLoader({ size, color }: { size: number; color: string }) {
    return (
        <motion.div
            className="rounded-lg border-2"
            style={{
                width: size * 0.6,
                height: size * 0.6,
                borderColor: color,
            }}
            animate={{
                borderRadius: ["20% 20% 20% 20%", "50% 20% 50% 20%", "50% 50% 50% 50%", "20% 50% 20% 50%", "20% 20% 20% 20%"],
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.1, 1, 1.1, 1],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    );
}
