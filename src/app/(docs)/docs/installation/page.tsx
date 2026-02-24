import type { Metadata } from "next";
import { notFound } from "next/navigation";


import { Breadcrumbs } from "@/components/site/navigation/Breadcrumbs";
import { Pagination } from "@/components/site/navigation/Pagination";

import { MDX } from "@/components/mdx/MDXComponents";

import { getDocs } from "@/lib/mdx";

import { constructMetadata } from "@/config/metadata";

export const metadata = constructMetadata({
  title: "Installation",
  description: "How to install dependencies and structure your application",
});

const Docs = getDocs("get-started");

import { DocLayout } from "@/components/site/docs/DocLayout";

export default async function CLIPage() {
  const docs = Docs.find((docs) => docs.slug === "installation");

  if (!docs) return notFound();

  const { content, title, description } = docs;

  return (
    <DocLayout>
      <main className="my-2 space-y-10">
        <div className="space-y-4">
          <Breadcrumbs groupName="Get Started" currentPage="Installation" />
          <div className="space-y-4">
            <div className="space-y-3.5">
              <h1 className="text-3xl font-semibold tracking-tight text-primary">
                {title}
              </h1>
              <p className="max-w-xl text-[16px] font-normal leading-relaxed text-black/80 dark:text-white/90">
                {description}
              </p>
            </div>
            {/* <a
              href="https://npmjs.com/package/zed-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-fit text-xs text-neutral-700 dark:text-neutral-200 transition-all duration-200 border border-neutral-300 dark:border-neutral-800 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-neutral-200/40 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800/60"
            >
              Npm Registry
              <ArrowIconGlitch />
            </a> */}
          </div>
        </div>
        <MDX source={content} />
        <Pagination
          next={{
            href: "/docs/button",
            title: "Button",
          }}
        />
      </main>
    </DocLayout>
  );
}



