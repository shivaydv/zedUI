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
        name: "dialog",
        type: "registry:ui",
        description: "A premium dialog component with smooth animations and flexible layout.",
        dependencies: ["@base-ui/react", "lucide-react"],
        files: [
            {
                path: "registry/ui/dialog.tsx",
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
        name: "bento-grid",
        type: "registry:ui",
        description: "A premium bento grid layout with animated cards and reveal effects.",
        dependencies: ["motion", "lucide-react"],
        files: [
            {
                path: "registry/ui/bento-grid.tsx",
                type: "registry:ui",
            },
        ],
    },
    {
        name: "stacked-sections",
        type: "registry:ui",
        description: "A scroll-triggered stack of 100vh sections that pin and scale as you scroll.",
        dependencies: ["motion"],
        files: [
            {
                path: "registry/ui/stacked-sections.tsx",
                type: "registry:ui",
            },
        ],
    },
]
