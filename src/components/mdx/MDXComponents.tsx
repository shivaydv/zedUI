import Image from "next/image";
import Link from "next/link";

import type { MDXComponents } from "mdx/types";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import type { PluggableList } from "unified";

import { cn } from "@/lib/utils";

import { Button } from "@/registry/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/site/docs/Tabs";
import { CodeBlock } from "@/components/site/docs/CodeBlock";
import { CommandBlock } from "@/components/site/docs/CommandBlock";
import { ComponentView } from "@/components/site/docs/ComponentView";
import { CopyCode } from "@/components/site/docs/CopyCode";
import { BlurImage } from "@/components/shared/BlurImage";

const components: MDXComponents = {
  ComponentView: ({ children, isReloadAnimation, ...props }) => (
    <ComponentView
      isReloadAnimation={isReloadAnimation}
      className={cn(props.className)}
      {...props}
    >
      {children}
    </ComponentView>
  ),
  p: ({ children, ...props }) => (
    <p
      className="font-normal text-black/80 leading-relaxed dark:text-white/90"
      {...props}
    >
      {children}
    </p>
  ),
  h1: ({ children, ...props }) => (
    <h1
      className="font-semibold text-3xl text-primary tracking-tight"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2
      className="font-semibold text-primary text-xl tracking-tight"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      className="font-semibold text-primary text-xl tracking-tight"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="font-medium text-lg text-primary tracking-tight" {...props}>
      {children}
    </h4>
  ),
  CommandBlock: ({
    children,
    npmCommand,
    yarnCommand,
    pnpmCommand,
    bunCommand,
    ...props
  }) => (
    <CommandBlock
      npmCommand={npmCommand}
      yarnCommand={yarnCommand}
      pnpmCommand={pnpmCommand}
      bunCommand={bunCommand}
      className={cn(props.className)}
      {...props}
    />
  ),
  CodeBlock: ({
    fileName,
    contentClassName,
    copyCode = true,
    customFilePath,
    ...props
  }) => (
    <CodeBlock
      fileName={fileName}
      copyCode={copyCode}
      className={cn(props.className)}
      contentClassName={contentClassName}
      customFilePath={customFilePath}
      {...props}
    />
  ),
  a: ({ children, className, ...props }) => {
    const isExternal = props.href?.startsWith("http");

    if (isExternal) {
      return (
        <a
          {...props}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "underline decoration-neutral-300 underline-offset-[2.5px] duration-200 hover:text-black hover:decoration-neutral-500 dark:decoration-neutral-500 dark:hover:text-white dark:hover:decoration-neutral-300",
            className
          )}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={props.href || "#"}
        {...props}
        className={cn(
          "underline decoration-neutral-300 underline-offset-[2.5px] duration-200 hover:text-black hover:decoration-neutral-500 dark:decoration-neutral-500 dark:hover:text-white dark:hover:decoration-neutral-300",
          className
        )}
      >
        {children}
      </Link>
    );
  },
  Link: ({ children, className, isExternal = false, ...props }) => {
    if (isExternal) {
      return (
        <a
          {...props}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "underline decoration-neutral-300 underline-offset-[2.5px] duration-200 hover:text-black hover:decoration-neutral-500 dark:decoration-neutral-500 dark:hover:text-white dark:hover:decoration-neutral-300",
            className
          )}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        {...props}
        className={cn(
          "underline decoration-neutral-300 underline-offset-[2.5px] duration-200 hover:text-black hover:decoration-neutral-500 dark:decoration-neutral-500 dark:hover:text-white dark:hover:decoration-neutral-300",
          className
        )}
      >
        {children}
      </Link>
    );
  },
  CodeHighlight: ({ children, ...props }) => (
    <span
      className="rounded-md bg-neutral-300/70 px-1 py-0.5 font-mono text-foreground text-sm dark:bg-neutral-800/70"
      {...props}
    >
      {children}
    </span>
  ),
  BlurImage: ({ src, alt, ...props }) => (
    <BlurImage src={src} alt={alt} {...props} />
  ),
  Image: ({ src, alt, ...props }) => (
    <Image src={src} alt={alt} width={1280} height={960} {...props} />
  ),
  Tabs: ({ ...props }) => (
    <Tabs className={cn("relative w-full", props.className)} {...props} />
  ),
  TabsList: ({ ...props }) => (
    <TabsList className={cn(props.className)} {...props} />
  ),
  TabsTrigger: ({ ...props }) => (
    <TabsTrigger className={cn(props.className)} {...props} />
  ),
  TabsContent: ({ className, ...props }) => (
    <TabsContent className={cn(props.className)} {...props} />
  ),
  CopyCode: ({ code, mode, example, ...props }) => (
    <CopyCode mode={mode} code={code} example={example} {...props} />
  ),
  Button: ({ children, variant, ...props }) => (
    <Button variant={variant} className={cn(props.className)} {...props}>
      {children}
    </Button>
  ),
};

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
  };
}

export function MDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypePrettyCode,
              {
                theme: {
                  dark: "github-dark",
                  light: "github-light",
                },
                keepBackground: false,
                defaultLang: "tsx",
              },
            ],
          ] as PluggableList,
        },
      }}
      {...props}
    />
  );
}


