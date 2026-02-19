import { z } from "zod"

export const registryItemSchema = z.object({
    name: z.string(),
    type: z.enum([
        "registry:ui",
        "registry:hook",
        "registry:block",
        "registry:component",
        "registry:theme",
        "registry:page",
    ]),
    title: z.string().optional(),
    description: z.string().optional(),
    dependencies: z.array(z.string()).optional(),
    devDependencies: z.array(z.string()).optional(),
    registryDependencies: z.array(z.string()).optional(),
    files: z.array(
        z.object({
            path: z.string(),
            content: z.string().optional(),
            type: z.enum([
                "registry:ui",
                "registry:component",
                "registry:hook",
                "registry:block",
                "registry:theme",
                "registry:page",
            ]),
            target: z.string().optional(),
        })
    ).optional(),
    categories: z.array(z.string()).optional(),
})

export const registrySchema = z.array(registryItemSchema)

export type Registry = z.infer<typeof registrySchema>
export type RegistryItem = z.infer<typeof registryItemSchema>
