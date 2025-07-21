"use client";

import { motion, useInView } from "motion/react";
import { Sparkles, Palette, Zap, Puzzle } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-fd-primary" />,
    title: "Blazing Fast",
    description:
      "Zero-runtime, minimal styles, optimized for speed and performance.",
  },
  {
    icon: <Palette className="w-6 h-6 text-fd-primary" />,
    title: "Themeable",
    description:
      "Dark mode support, CSS variables, and easy design customization.",
  },
  {
    icon: <Puzzle className="w-6 h-6 text-fd-primary" />,
    title: "Composable",
    description: "Each component is modular, flexible, and easy to integrate.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-fd-primary" />,
    title: "Production Ready",
    description:
      "Fully accessible and battle-tested with TypeScript and best practices.",
  },
];
const FeatureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 px-4 bg-fd-background text-fd-foreground" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-5xl text-center mb-16"
      >
        <h2 className="mb-3 bg-gradient-to-r from-fd-primary to-rose-400 bg-clip-text text-3xl font-bold text-transparent">
          Why Choose This Library?
        </h2>
        <p className="mt-4  text-fd-muted-foreground">
          Build faster with reusable, accessible, and customizable components.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto ">
        {features.map((feature, i) => (
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.4,
              delay: isInView ? 0.5+ i * 0.1 : 0,
              ease: "easeOut",
            }}
            key={i}
            style={{ willChange: "transform" }}
            className="relative rounded-xl border p-6 transition-shadow duration-200 hover:shadow-md"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 rounded-md bg-fd-muted">{feature.icon}</div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
            </div>
            <p className="text-sm text-fd-muted-foreground">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
