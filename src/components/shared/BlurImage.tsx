"use client";

import NextImage from "next/image";

import { useState } from "react";

import { cn } from "@/lib/utils";

type BlurImageProps = {
  className?: string;
  lazy?: boolean;
} & React.ComponentPropsWithoutRef<typeof NextImage>;

export function BlurImage({
  alt,
  src,
  className,
  lazy = true,
  fill,
  width,
  height,
  priority: basePriority,
  loading: baseLoading,
  ...props
}: BlurImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  const isPriority = basePriority || !lazy;
  const loading = isPriority ? undefined : (baseLoading ?? (lazy ? "lazy" : undefined));

  return (
    <NextImage
      className={cn("duration-700", isLoading && "blur-md", className)}
      src={src}
      alt={alt}
      loading={loading}
      priority={isPriority}
      fill={fill}
      width={!fill ? (width ?? 1920) : undefined}
      height={!fill ? (height ?? 1080) : undefined}
      quality={75}
      onLoad={() => setIsLoading(false)}
      {...props}
    />
  );
}
