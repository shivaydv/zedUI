"use client";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const QuoteSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="px-4 py-20">
      <motion.blockquote
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="mx-auto max-w-4xl"
      >
        <div className="flex flex-col items-center">
          <motion.div
            // variants={itemVariants}
            className="text-fd-primary mb-6 font-serif text-4xl"
          >
            &ldquo;
          </motion.div>
          <motion.p
            // variants={itemVariants}
            className="text-center text-xl sm:text-2xl md:text-3xl md:leading-normal max-w-3xl"
          >
            Every component in Axiomite UI is something I&apos;ve personally
            needed and fine-tuned for real-world projects.
          </motion.p>
          <motion.div
            // variants={itemVariants}
            className="mt-6 flex flex-col items-center md:mt-10"
          >
            <p className="font-semibold ">Shiva Yadav</p>
            <p className="text-fd-muted-foreground">Creator of Axiomite UI</p>
          </motion.div>
        </div>
      </motion.blockquote>
    </div>
  );
};

export default QuoteSection;
