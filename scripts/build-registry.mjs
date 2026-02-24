/**
 * build-registry.mjs
 *
 * Pre-generates static JSON registry files into public/registry/
 * so they can be served as static assets in production (Vercel).
 *
 * Usage: node scripts/build-registry.mjs
 * Run this before `next build`, e.g. via the "build" npm script.
 */

import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, "..")
const SRC = path.join(ROOT, "src")
const OUT = path.join(ROOT, "public", "registry")

// ── Load the registry index ──────────────────────────────────────────────────
// We can't do a regular `import` of a TypeScript file in a plain .mjs script,
// so we read + evaluate it via a small manual parse.  Instead we keep the
// registry as a plain JS/TS object and import it after stripping TS types, OR
// we duplicate the items here.  The cleanest approach for a build script is to
// read the source .tsx files from disk and inline their content.

// Manually mirror the registry entries from src/registry/index.ts.
// Keep this in sync whenever you add new registry items.
const registry = [
    {
        name: "button",
        type: "registry:ui",
        description:
            "A highly customizable button component with multiple variants and magnetic effects.",
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
        description:
            "A hook to detect and switch between package managers (npm, pnpm, yarn, bun).",
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
        description:
            "A collection of unique, premium loaders with SVG animations.",
        dependencies: ["motion"],
        files: [
            {
                path: "registry/ui/loader.tsx",
                type: "registry:ui",
            },
        ],
    },
]

// ── Helpers ──────────────────────────────────────────────────────────────────
function readSourceFile(relativePath) {
    const full = path.join(SRC, relativePath)
    return fs.readFileSync(full, "utf-8")
}

function resolveItem(item) {
    return {
        ...item,
        files: item.files?.map((file) => {
            try {
                const content = readSourceFile(file.path)
                return { ...file, content }
            } catch (err) {
                console.warn(`  ⚠ Could not read ${file.path}: ${err.message}`)
                return file
            }
        }),
    }
}

// ── Main ─────────────────────────────────────────────────────────────────────
fs.mkdirSync(OUT, { recursive: true })

// 1. Write public/registry/index.json
fs.writeFileSync(
    path.join(OUT, "index.json"),
    JSON.stringify(registry, null, 2),
    "utf-8"
)
console.log("✔ public/registry/index.json")

// 2. Write public/registry/[name].json for each item
for (const item of registry) {
    const resolved = resolveItem(item)
    const outPath = path.join(OUT, `${item.name}.json`)
    fs.writeFileSync(outPath, JSON.stringify(resolved, null, 2), "utf-8")
    console.log(`✔ public/registry/${item.name}.json`)
}

console.log("\n✅ Registry build complete.")
