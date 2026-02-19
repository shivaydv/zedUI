import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/site/navigation/Breadcrumbs";
import { Pagination } from "@/components/site/navigation/Pagination";
import { Card } from "@/components/site/installation/Card";
import { INSTALLATION } from "./_data/installation";

import { constructMetadata } from "@/config/metadata";

export const metadata = constructMetadata({
  title: "Installation",
  description: "How to install dependencies and structure your application",
});

import { DocLayout } from "@/components/site/docs/DocLayout";

export default function InstallationPage() {
  return (
    <DocLayout>
      <main className="my-2 space-y-10">
        <div className="space-y-4">
          <Breadcrumbs groupName="Get Started" currentPage="Installation" />
          <div className="space-y-3.5">
            <h1 className="text-3xl font-semibold tracking-tight text-primary">
              Installation
            </h1>
            <p className="text-[16px] font-normal leading-relaxed text-black/80 dark:text-white/90">
              How to install dependencies and structure your application.
            </p>
          </div>
        </div>
        <div className="grid place-items-start gap-10 lg:grid-cols-2 lg:gap-4">
          {INSTALLATION.map(({ slug, icon, name }) => (
            <Card key={name} slug={slug} icon={icon} name={name} />
          ))}
        </div>
        <Pagination
          next={{
            href: "/docs/cli",
            title: "CLI",
          }}
        />
      </main>
    </DocLayout>
  );
}



