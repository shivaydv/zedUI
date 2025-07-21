import React from "react";

type DotBackgroundProps = {
  dotColor?: string; // rgba() or hex
  dotSize?: number; // px
  gap?: number; // px between dots
  mask?: boolean;
  className?: string;
};

const DotBackground: React.FC<DotBackgroundProps> = ({
  dotColor = "var(--color-muted-foreground)", // Default color
  dotSize = 0.8,
  gap = 32,
  mask = true,
  className,
}) => {
  const backgroundImage = `radial-gradient(at center center, ${dotColor} ${dotSize}px, transparent 0)`;

  const maskStyle = mask
    ? {
        maskImage: "radial-gradient(circle at center, white 10%, transparent 90%)",
        WebkitMaskImage: "radial-gradient(circle, white 10%, transparent 90%)",
      }
    : {};

  return (
    <div
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: `${gap}px ${gap}px`,
        backgroundRepeat: "repeat",
        ...maskStyle,
      }}
    />
  );
};

export default DotBackground;
