import Image from "next/image";
import Link from "next/link";
import React from "react";

import type { MDXComponents } from "mdx/types";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import type { PluggableList } from "unified";

import { cn } from "@/lib/utils";

import { Button } from "@/registry/ui/button";
import { Loader } from "@/registry/ui/loader";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/site/docs/Tabs";
import { CodeBlock } from "@/components/site/docs/CodeBlock";
import { CommandBlock } from "@/components/site/docs/CommandBlock";
import { ComponentView } from "@/components/site/docs/ComponentView";
import { RegistryCodeBlock } from "@/components/site/docs/RegistryCodeBlock";
import { Steps, Step } from "@/components/site/docs/Steps";
import { CopyCode } from "@/components/site/docs/CopyCode";
import { BlurImage } from "@/components/shared/BlurImage";
import { DataTable } from "@/components/site/docs/DataTable";



const components: MDXComponents = {
  ComponentView: ({ children, className, ...props }: any) => (
    <ComponentView
      className={cn(className)}
      {...props}
    >
      {children}
    </ComponentView>
  ),
  p: ({ children, className, ...props }: any) => (
    <p
      className={cn("font-normal text-black/80 leading-relaxed dark:text-white/90", className)}
      {...props}
    >
      {children}
    </p>
  ),
  h1: ({ children, className, ...props }: any) => (
    <h1
      className={cn("font-semibold text-3xl text-primary tracking-tight", className)}
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, className, ...props }: any) => (
    <h2
      className={cn("font-semibold text-primary text-xl tracking-tight", className)}
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, className, ...props }: any) => (
    <h3
      className={cn("font-semibold text-primary text-xl tracking-tight", className)}
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, className, ...props }: any) => (
    <h4 className={cn("font-medium text-lg text-primary tracking-tight", className)} {...props}>
      {children}
    </h4>
  ),
  CommandBlock: (props: any) => (
    <CommandBlock
      {...props}
    />
  ),
  CodeBlock: (props: any) => (
    <CodeBlock
      {...props}
    />
  ),
  RegistryCodeBlock: (props: any) => (
    <RegistryCodeBlock
      {...props}
    />
  ),
  Steps: ({ children, ...props }: any) => (
    <Steps {...props}>{children}</Steps>
  ),
  Step: ({ children, ...props }: any) => (
    <Step {...props}>
      {children}
    </Step>
  ),
  a: ({ children, className, ...props }: any) => {
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
  Link: ({ children, className, isExternal = false, ...props }: any) => {
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
        href={props.href || "#"}
        className={cn(
          "underline decoration-neutral-300 underline-offset-[2.5px] duration-200 hover:text-black hover:decoration-neutral-500 dark:decoration-neutral-500 dark:hover:text-white dark:hover:decoration-neutral-300",
          className
        )}
      >
        {children}
      </Link>
    );
  },
  CodeHighlight: ({ children, ...props }: any) => (
    <span
      className="rounded-md bg-neutral-300/70 px-1 py-0.5 font-mono text-foreground text-sm dark:bg-neutral-800/70"
      {...props}
    >
      {children}
    </span>
  ),
  BlurImage: (props: any) => (
    <BlurImage {...props} />
  ),
  Image: (props: any) => (
    <Image width={1280} height={960} {...props} />
  ),
  Tabs: (props: any) => (
    <Tabs className={cn("relative w-full", props.className)} {...props} />
  ),
  TabsList: (props: any) => (
    <TabsList {...props} />
  ),
  TabsTrigger: (props: any) => (
    <TabsTrigger {...props} />
  ),
  TabsContent: (props: any) => (
    <TabsContent {...props} />
  ),
  CopyCode: (props: any) => (
    <CopyCode {...props} />
  ),
  Button: ({ children, ...props }: any) => (
    <Button {...props}>
      {children}
    </Button>
  ),
  DataTable: (props: any) => <DataTable {...props} />,
  Loader: (props: any) => <Loader {...props} />,
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
