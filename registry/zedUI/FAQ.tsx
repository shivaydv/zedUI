"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/src/lib/utils";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQListProps {
  items: FAQItem[];
  className?: string;
  stagger?: boolean;
  delay?: number;
  animated?: boolean;
}

export function FAQList({
  items,
  className,
  stagger = true,
  delay,
  animated,
}: FAQListProps) {
  const ref = useRef(null);

  return (
    <div ref={ref} className={cn("space-y-2 w-full  ", className)}>
      {items.map((item, index) => (
        <SingleFAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          index={index}
          delay={stagger ? delay : 0} // Use stagger delay if enabled
          animated={animated} // Pass stagger prop to control animation
        />
      ))}
    </div>
  );
}

function SingleFAQItem({
  question,
  answer,
  index,
  delay = 0.15,
  animated = true,
}: FAQItem & { index: number; delay?: number; animated?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={animated ? { opacity: 0, y: 10 } : false}
      animate={animated ? { opacity: 1, y: 0 } : false}
      transition={
        animated
          ? {
              duration: 0.3,
              delay: index * delay,
              ease: "easeOut",
            }
          : undefined
      }
      className={cn(
        "group rounded-lg border border-border ",
        "transition-colors duration-200 ease-in-out",
        isOpen ? "bg-card/30 shadow-sm" : "hover:bg-card/50"
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 px-6 py-4 "
      >
        <h3
          className={cn(
            "text-left text-base font-medium transition-colors duration-200 ",
            "text-foreground/80",
            isOpen && "text-foreground"
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "shrink-0 rounded-full p-0.5 ",
            "transition-colors duration-200",
            isOpen ? "text-primary" : "text-muted-foreground"
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                opacity: { duration: 0.25, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: "easeInOut" },
                opacity: { duration: 0.25 },
              },
            }}
            className=""
          >
            <div className="border-t border-border/40 px-6 pb-4 pt-2">
              <motion.p
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-sm leading-relaxed text-muted-foreground"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
