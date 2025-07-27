"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { ChevronDown, Mail } from "lucide-react";
import { cn } from "@/src/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

function FAQItem({
  question,
  answer,
  index,
  isInView,
}: FAQItemProps & { isInView: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.3,
        delay: isInView ? index * 0.15 : 0,
        ease: "easeOut",
      }}
      className={cn(
        "group rounded-lg border border-fd-border/60",
        "transition-colors duration-200 ease-in-out",
        isOpen ? "bg-fd-card/30 shadow-sm" : "hover:bg-fd-card/50"
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 px-6 py-4"
      >
        <h3
          className={cn(
            "text-left text-base font-medium transition-colors duration-200",
            "text-fd-foreground/80",
            isOpen && "text-fd-foreground"
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={cn(
            "shrink-0 rounded-full p-0.5",
            "transition-colors duration-200",
            isOpen ? "text-fd-primary" : "text-fd-muted-foreground"
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
                height: {
                  duration: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.1,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
          >
            <div className="border-t border-fd-border/40 px-6 pb-4 pt-2">
              <motion.p
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="text-sm leading-relaxed text-fd-muted-foreground"
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

export default function FAQSection() {
  const faqs: Omit<FAQItemProps, "index">[] = [
    {
      question: "What makes Zed UI unique?",
      answer:
        "Zed UI stands out through its minimal design, powerful component library, and seamless integration options. Our goal is to simplify your workflow while giving you everything you need to build polished, professional interfaces.",
    },
    {
      question: "How can I customize the components?",
      answer:
        "All components are built with Tailwind CSS, making them highly customizable. You can modify colors, spacing, typography, and more by simply adjusting the class names or using our theme variables to match your brand identity.",
    },
    {
      question: "Do the components work with dark mode?",
      answer:
        "Yes, all components are designed to work seamlessly with both light and dark modes. They automatically adapt to your site's theme settings, providing a consistent user experience regardless of the user's preference.",
    },
    {
      question: "How can I get started with Zed UI?",
      answer:
        "You can get started by browsing our component library and copying the code for the components you need. Our documentation provides clear instructions for installation and usage, and you can always reach out to our support team if you need assistance.",
    },
    {
      question: "What if I want to contribute?",
      answer:
        "We welcome contributions from the community! You can contribute by submitting pull requests on our GitHub repository. Please check our contribution guidelines for more details on how to get involved.",
    },
    {
      question: "Can I use Zed UI for commercial projects?",
      answer:
        "Absolutely! It is free to use for both personal and commercial projects. There are no licensing fees or attribution requirements—just build and launch your MVP faster than ever before.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative w-full overflow-hidden bg-fd-background py-16"
      ref={ref}
    >
      {/* Decorative elements */}
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-fd-primary/10 blur-3xl max-md:hidden" />
      <div className="absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-fd-primary/20 blur-3xl max-md:hidden" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-12 max-w-2xl text-center"
      >
        <h2 className="mb-3 bg-gradient-to-r from-fd-primary to-rose-400 bg-clip-text text-3xl font-bold text-transparent">
          Frequently Asked Questions
        </h2>
        <p className=" text-fd-muted-foreground">
          Everything you need to know about Zed UI
        </p>
      </motion.div>

      <div className="mx-auto max-w-2xl space-y-2 px-2 sm:px-6 lg:px-8">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} index={index} isInView={isInView} />
        ))}
      </div>
    </section>
  );
}
