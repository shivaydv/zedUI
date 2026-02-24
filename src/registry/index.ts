import { Registry } from "@/registry/schema"

export const registry: Registry = [
    {
        name: "button",
        type: "registry:ui",
        description: "A highly customizable button component with multiple variants and magnetic effects.",
        dependencies: ["motion", "@radix-ui/react-slot"],
        files: [
            {
                path: "registry/ui/button.tsx",
                type: "registry:ui",
            },
        ],
    },
    {
        name: "use-package-manager",
        type: "registry:hook",
        description: "A hook to detect and switch between package managers (npm, pnpm, yarn, bun).",
        dependencies: ["jotai"],
        files: [
            {
                path: "registry/hooks/use-package-manager.ts",
                type: "registry:hook",
            },
        ],
    },
    {
        name: "loader",
        type: "registry:ui",
        description: "A collection of unique, premium loaders with SVG animations.",
        dependencies: ["motion"],
        files: [
            {
                path: "registry/ui/loader.tsx",
                type: "registry:ui",
            },
        ],
    },
]
