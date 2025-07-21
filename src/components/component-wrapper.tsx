"use client";

import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";
import { RotateCcw } from "lucide-react";
import React from "react";

interface ComponentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  reload?: boolean;
}

export const ComponentWrapper = ({
  children,
  reload = false,
  className,
}: ComponentWrapperProps) => {
  const [key, setKey] = React.useState(0);
  const [isRotating, setIsRotating] = React.useState(false);

  const handleClick = () => {
    setIsRotating(true);
    setKey((prev) => prev + 1);
    setTimeout(() => setIsRotating(false), 800);
  };

  return (
    <div
      key={key}
      className={cn("relative rounded-md bg-background", className)}
    >
      {reload && (
        <div className="flex items-center justify-end gap-2 p-4 absolute right-0">
          <Button
            onClick={handleClick}
            className="flex items-center rounded-lg px-3 py-1 cursor-pointer z-20"
            variant="ghost"
            title="Restart Component"
            aria-label="Restart Component"
          >
            <RotateCcw
              aria-label="restart-btn"
              size={16}
              className={cn(
                isRotating && "animate-[spin_0.4s_linear_reverse_infinite]"
              )}
            />
          </Button>
        </div>
      )}

      <div className="flex min-h-[350px] w-full items-center justify-center  relative">
        {children}
      </div>
    </div>
  );
};
