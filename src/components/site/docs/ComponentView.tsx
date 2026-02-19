"use client";

import { useState, useEffect } from "react";

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

  useEffect(() => {
    if (isFullScreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isFullScreen]);

  return (
    <>
      <div
        className={cn(
          "relative border-neutral-300/50 bg-background dark:border-neutral-800/40 rounded-xl border p-6",
          className
        )}
      >
        {showRefresh ? <div key={reloadKey}>{children}</div> : children}

        <div className="absolute right-4 top-3 z-20 flex items-center gap-2 transition-opacity group-hover:opacity-100 opacity-60">
          {isExpandable && (
            <button
              className="group/btn flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-300/50 bg-background/50 backdrop-blur-sm text-neutral-500 transition-all hover:bg-neutral-100 hover:text-primary dark:border-neutral-800/60 dark:bg-neutral-900/50 dark:hover:bg-neutral-800 shadow-sm"
              onClick={() => setIsFullScreen(true)}
              title="Full Screen"
            >
              <Maximize2Icon size={14} className="transition-transform group-hover/btn:scale-110" />
            </button>
          )}

          {showRefresh && (
            <button
              className="group/btn flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-300/50 bg-background/50 backdrop-blur-sm text-neutral-500 transition-all hover:bg-neutral-100 hover:text-primary dark:border-neutral-800/60 dark:bg-neutral-900/50 dark:hover:bg-neutral-800 shadow-sm"
              onClick={handleReload}
              title="Reload"
            >
              <motion.div
                animate={{ rotate: reloadKey * 360 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex items-center justify-center"
              >
                <RotateCwIcon size={14} className="transition-transform group-hover/btn:scale-110" />
              </motion.div>
            </button>
          )}
        </div>
      </div>

      {isFullScreen && (
        <div className="fixed inset-0 z-100 flex flex-col bg-background">
          <div className="flex items-center justify-between border-b dark:border-neutral-800 p-4 px-6 bg-background/80 backdrop-blur-md">
            <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider font-mono">Component Preview</h2>
            <div className="flex items-center gap-3">
              {showRefresh && (
                <button
                  className="group flex items-center gap-2 rounded-lg border border-neutral-300/50 bg-neutral-100/50 px-3 py-1.5 text-xs font-semibold text-neutral-500 transition-all hover:bg-neutral-100 hover:text-primary dark:border-neutral-800/60 dark:bg-neutral-900/50 dark:hover:bg-neutral-800 shadow-sm"
                  onClick={handleReload}
                >
                  <motion.div
                    animate={{ rotate: reloadKey * 360 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="flex items-center justify-center"
                  >
                    <RotateCwIcon size={14} />
                  </motion.div>
                  Refresh
                </button>
              )}
              <button
                onClick={() => setIsFullScreen(false)}
                className="group flex items-center gap-2 rounded-lg border border-neutral-300/50 bg-neutral-100/50 px-3 py-1.5 text-xs font-semibold text-neutral-500 transition-all hover:bg-neutral-100 hover:text-primary dark:border-neutral-800/60 dark:bg-neutral-900/50 dark:hover:bg-neutral-800 shadow-sm"
              >
                <XIcon size={14} />
                Close
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-auto bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#262626_1px,transparent_1px)] bg-size-[16px_16px]">
            <div className="mx-auto min-h-full w-full max-w-7xl p-6 md:p-10">
              <div className="relative w-full rounded-2xl border border-neutral-200 bg-background shadow-2xl dark:border-neutral-800" key={reloadKey}>
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
