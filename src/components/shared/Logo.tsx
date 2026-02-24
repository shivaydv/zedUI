"use client";

import { cn } from "@/lib/utils";


const Logo = ({
    type = "both",
    className,
    iconClassName,
    textClassName,
}: {
    type?: "text" | "both";
    className?: string;
    iconClassName?: string;
    textClassName?: string;
}) => {
    if (type === "text") {
        return (
            <span
                className={`${textClassName} ${className} font-semibold shrink-0 text-xl leading-none`}
            >
                Zed UI
            </span>
        );
    }
    return (
        <div className={cn("flex items-center gap-2", className)}>
            <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                className={cn("w-7 h-7", iconClassName)}
                aria-label="Zed UI Logo"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    width="28"
                    height="28"
                    rx="7"
                    className="fill-black dark:fill-white"
                    style={{ mixBlendMode: "normal" }}
                />

                <path
                    d="M9 9H19L9 19H19"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white dark:text-black"
                />
            </svg>
            <span className={cn("text-xl font-semibold shrink-0 leading-none", textClassName)}>
                Zed UI
            </span>
        </div>
    );
};

export default Logo;
