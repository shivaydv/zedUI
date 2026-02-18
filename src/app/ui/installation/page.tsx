import type { Metadata } from "next";

import { Breadcrumbs } from "../_components/Breadcrumbs";
import { Pagination } from "../_components/Pagination";
import { Card } from "./_components/Card";
import { INSTALLATION } from "./_data/installation";

export const metadata: Metadata = {
  title: "Installation",
  description: "How to install dependencies and structure your application",
  openGraph: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "https://zed-ui.com/open-graphs/og-installation.png",
        alt: "zed-ui's website cover",
      },
    ],
    locale: "en",
    siteName: "Zed UI Team",
    title: "zed-ui: Installation",
    description: "How to install dependencies and structure your application",
    type: "website",
    url: "https://zed-ui.com/ui/installation",
  },
  twitter: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "https://zed-ui.com/open-graphs/og-installation.png",
        alt: "zed-ui's website cover",
      },
    ],
    card: "summary_large_image",
    title: "zed-ui: Installation",
    description: "How to install dependencies and structure your application",
    site: "@zedui",
    creator: "Zed UI Team",
  },
};

export default function InstallationPage() {
  return (
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
          href: "/ui/cli",
          title: "CLI",
        }}
      />
    </main>
  );
}



