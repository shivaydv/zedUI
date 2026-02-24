"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/ui/button";
import { Loader } from "@/registry/ui/loader";

const BENTO_ITEMS = [
  {
    title: "Core Infrastructure",
    description: "Built on high-performance primitives for seamless integration.",
    image: "/dummy-images/bento1.avif",
    colSpan: "md:col-span-2",
  },
  {
    title: "Visual Fidelity",
    description: "Extreme attention to detail in every pixel.",
    image: "/dummy-images/cta1.avif",
    colSpan: "md:col-span-1",
  },
  {
    title: "Motion Design",
    description: "Physics-based animations that feel natural and responsive.",
    image: "/dummy-images/bento3.avif",
    colSpan: "md:col-span-1",
  },
  {
    title: "Accessibility",
    description: "Engineered to be inclusive and standards-compliant by default.",
    image: "/dummy-images/bento4.avif",
    colSpan: "md:col-span-2",
  },
];

const PREVIEW_COMPONENTS = [
  { component: <Button variant="premium">Premium</Button> },
  { component: <Button variant="shine" >Shine</Button> },
  { component: <Button variant="outline">Outline</Button> },
  { component: <Button variant="ghost">Ghost</Button> },
  { component: <Button variant="premium" isMagnetic>Magnetic</Button> },
  { component: <Button variant="premium" isLoading>Loading</Button> },
  { component: <Loader variant="orbital" size={40} /> },
  { component: <Loader variant="morph" size={32} /> },
];

export function ComponentsSection() {
  return (
    <section className="flex flex-col gap-32">
      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BENTO_ITEMS.map((item, idx) => (
          <div
            key={idx}
            className={cn(
              "relative group overflow-hidden bg-muted/5 border border-border min-h-[300px] rounded-xl p-8 flex flex-col justify-end",
              item.colSpan
            )}
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover grayscale opacity-30  group-hover:opacity-40 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
            </div>

            <div className="relative z-10 space-y-1">
              <h3 className="text-lg font-medium tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground max-w-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Extreme Minimal Showcases - Increased size */}
      <div className="space-y-10">
        <h2 className="text-xl font-medium text-foreground uppercase tracking-widest text-[13px] opacity-40">
          Components Showcase
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PREVIEW_COMPONENTS.map((item, idx) => (
            <div
              key={idx}
              className="bg-muted/3 border border-border aspect-square flex items-center justify-center rounded-2xl transition-all duration-300 hover:border-foreground/20 hover:bg-muted/10"
            >
              <div className="flex items-center justify-center">
                {item.component}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
