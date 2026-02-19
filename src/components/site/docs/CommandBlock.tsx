"use client";

import { useMemo } from "react";

import { cn } from "@/lib/utils";

import { usePackageManager } from "@/registry/hooks/use-package-manager";

import { CopyCode } from "./CopyCode";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";

type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

type CommandBlockProps = {
  npmCommand: string;
  yarnCommand?: string;
  pnpmCommand?: string;
  bunCommand?: string;
} & React.ComponentProps<"div">;

export function CommandBlock({
  npmCommand,
  yarnCommand,
  pnpmCommand,
  bunCommand,
  className,
}: CommandBlockProps) {
  const [packageManager, setPackageManager] = usePackageManager();

  const tabs = useMemo(() => {
    // Helper to transform npm commands to other package managers
    const generateCommand = (cmd: string, target: PackageManager) => {
      if (cmd.startsWith("npx ")) {
        const pkg = cmd.replace("npx ", "");
        if (target === "pnpm") return `pnpm dlx ${pkg}`;
        if (target === "bun") return `bunx --bun ${pkg}`;
        if (target === "yarn") return `yarn dlx ${pkg}`;
        return cmd;
      }
      if (cmd.startsWith("npm install ") || cmd.startsWith("npm i ")) {
        const pkgs = cmd.replace(/^npm (install|i) /, "");
        if (target === "pnpm") return `pnpm add ${pkgs}`;
        if (target === "yarn") return `yarn add ${pkgs}`;
        if (target === "bun") return `bun add ${pkgs}`;
        return cmd;
      }
      return cmd;
    };

    return {
      npm: npmCommand,
      pnpm: pnpmCommand || generateCommand(npmCommand, "pnpm"),
      yarn: yarnCommand || generateCommand(npmCommand, "yarn"),
      bun: bunCommand || generateCommand(npmCommand, "bun"),
    };
  }, [npmCommand, pnpmCommand, yarnCommand, bunCommand]);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-neutral-300/50 bg-neutral-200/30 dark:border-neutral-800/60 dark:bg-neutral-900/40",
        className,
      )}
    >
      <Tabs
        defaultValue="npm"
        value={packageManager}
        onValueChange={(value) => setPackageManager(value as PackageManager)}
      >
        <div className="flex items-center justify-between border-b border-neutral-300/50 bg-neutral-200/30 pr-2.5 dark:border-neutral-800/60 dark:bg-neutral-900/30">
          <TabsList className="bg-transparent h-10 pl-4">
            {Object.entries(tabs).map(([key, _]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="font-mono"
                isIndicator
              >
                {key}
              </TabsTrigger>
            ))}
          </TabsList>
          <CopyCode code={tabs[packageManager]} />
        </div>
        <div className="relative overflow-x-auto">
          {Object.entries(tabs).map(([key, value]) => (
            <TabsContent key={key} value={key} className="pt-4">
              <pre className="px-4 pb-4">
                <code
                  className="relative font-mono text-sm leading-none !text-primary"
                  data-language="bash"
                >
                  {value}
                </code>
              </pre>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
