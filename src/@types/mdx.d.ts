import React from "react"
import { ComponentView } from "@/components/site/docs/ComponentView"
import { CommandBlock } from "@/components/site/docs/CommandBlock"
import { CodeBlock } from "@/components/site/docs/CodeBlock"
import { RegistryCodeBlock } from "@/components/site/docs/RegistryCodeBlock"
import { Steps, Step } from "@/components/site/docs/Steps"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/site/docs/Tabs"
import { Button } from "@/registry/ui/button"
import { CopyCode } from "@/components/site/docs/CopyCode"
import { BlurImage } from "@/components/shared/BlurImage"
import { BentoGrid, BentoCard } from "@/registry/ui/bento-grid"
import Link from "next/link"
import Image from "next/image"

declare global {
    // MDX types for better IDE support
    type MDXComponent<P = any> = React.FC<P>

    interface MDXProvidedComponents {
        ComponentView: typeof ComponentView
        CommandBlock: typeof CommandBlock
        CodeBlock: typeof CodeBlock
        RegistryCodeBlock: typeof RegistryCodeBlock
        Steps: typeof Steps
        Step: typeof Step
        Tabs: typeof Tabs
        TabsList: typeof TabsList
        TabsTrigger: typeof TabsTrigger
        TabsContent: typeof TabsContent
        Button: typeof Button
        CopyCode: typeof CopyCode
        BlurImage: typeof BlurImage
        Link: typeof Link
        Image: typeof Image
        BentoGrid: typeof BentoGrid
        BentoCard: typeof BentoCard
        CodeHighlight: React.FC<React.HTMLAttributes<HTMLSpanElement>>
        p: React.FC<React.HTMLAttributes<HTMLParagraphElement>>
        h1: React.FC<React.HTMLAttributes<HTMLHeadingElement>>
        h2: React.FC<React.HTMLAttributes<HTMLHeadingElement>>
        h3: React.FC<React.HTMLAttributes<HTMLHeadingElement>>
        h4: React.FC<React.HTMLAttributes<HTMLHeadingElement>>
        a: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>>
    }

    namespace JSX {
        interface IntrinsicElements extends MDXProvidedComponents { }
    }
}

declare module "mdx/types" {
    interface MDXComponents extends MDXProvidedComponents { }
}
