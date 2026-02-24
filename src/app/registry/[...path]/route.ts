import { NextRequest, NextResponse } from "next/server"
import { registry } from "@/registry"
import { getFileContent } from "@/utils/get-file-content"
import { RegistryItem } from "@/registry/schema"

function resolveItemWithContent(item: RegistryItem) {
    return {
        ...item,
        files: item.files?.map((file) => {
            try {
                // The path in registry index is relative to 'src'
                // e.g. "registry/ui/button.tsx"
                const content = getFileContent("", file.path)
                return { ...file, content }
            } catch (error) {
                console.error(`Failed to read file ${file.path}:`, error)
                return file
            }
        }),
    }
}

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ path: string[] }> }
) {
    const { path: pathSegments } = await params

    // Handle /registry/index.json
    if (pathSegments.length === 1 && pathSegments[0] === "index.json") {
        return NextResponse.json(registry)
    }

    // Handle /registry/[name].json  (shadcn CLI format)
    // e.g. /registry/button.json
    if (pathSegments.length === 1 && pathSegments[0].endsWith(".json")) {
        const name = pathSegments[0].replace(".json", "")
        const item = registry.find((i) => i.name === name)

        if (!item) {
            return new NextResponse("Not Found", { status: 404 })
        }

        return NextResponse.json(resolveItemWithContent(item))
    }

    // Handle /registry/[namespace]/[name].json
    // e.g. /registry/ui/button.json
    if (pathSegments.length === 2 && pathSegments[1].endsWith(".json")) {
        const namespace = pathSegments[0]
        const name = pathSegments[1].replace(".json", "")

        const item = registry.find(
            (i) =>
                i.name === name &&
                (i.type === `registry:${namespace}` ||
                    i.type === `registry:${namespace.replace(/s$/, "")}`)
        )

        if (!item) {
            return new NextResponse("Not Found", { status: 404 })
        }

        return NextResponse.json(resolveItemWithContent(item))
    }

    return new NextResponse("Not Found", { status: 404 })
}

