"use client";

import { useState } from "react";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Maximize2Icon, RotateCwIcon, XIcon } from "lucide-react";

type ComponentViewProps = {
  isReloadAnimation?: boolean;
  isRefreshable?: boolean;
  isExpandable?: boolean;
} & React.ComponentProps<"div">;

export function ComponentView({
  isReloadAnimation,
  isRefreshable,
  isExpandable,
  className,
  children,
}: ComponentViewProps) {
  const [reloadKey, setReloadKey] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Support both prop names
  const showRefresh = isReloadAnimation || isRefreshable;

  function handleReload() {
    setReloadKey((prevKey) => prevKey + 1);
  }

  return (
    <>
      <div
        className={cn(
          "relative border-neutral-300/50 bg-background dark:border-neutral-800/40 rounded-xl border px-4",
          className
        )}
      >
        {showRefresh ? <div key={reloadKey}>{children}</div> : children}

        <div className="absolute right-4 top-3 z-50 flex items-center gap-2">
          {isExpandable && (
            <button
              className="group flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-300/50 bg-neutral-100/50 text-neutral-500 transition-all hover:bg-neutral-100 hover:text-primary dark:border-neutral-800/60 dark:bg-neutral-900/50 dark:hover:bg-neutral-800"
              onClick={() => setIsFullScreen(true)}
              title="Full Screen"
            >
              <Maximize2Icon size={14} className="transition-transform group-hover:scale-110" />
            </button>
          )}

          {showRefresh && (
            <button
              className="group flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-300/50 bg-neutral-100/50 text-neutral-500 transition-all hover:bg-neutral-100 hover:text-primary dark:border-neutral-800/60 dark:bg-neutral-900/50 dark:hover:bg-neutral-800"
              onClick={handleReload}
              title="Reload"
            >
              <motion.div
                animate={{ rotate: reloadKey * 360 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex items-center justify-center"
              >
                <RotateCwIcon size={14} className="transition-transform group-hover:scale-110" />
              </motion.div>
            </button>
          )}
        </div>
      </div>

      {isFullScreen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="absolute top-6 right-6 z-101">
            <button
              onClick={() => setIsFullScreen(false)}
              className="rounded-full bg-neutral-100 p-2.5 text-neutral-500 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
            >
              <XIcon size={24} />
            </button>
          </div>
          <div className="h-[90vh] w-[90vw] overflow-auto rounded-2xl border border-neutral-200 bg-background p-10 shadow-2xl dark:border-neutral-800 flex items-center justify-center">
            {children}
          </div>
        </div>
      )}
    </>
  );
}
