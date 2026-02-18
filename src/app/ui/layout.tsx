import { Metadata } from "next";

import { Sidebar } from "@/app/ui/_components/sidebar/Sidebar";
import { OnThisPage } from "./_components/OnThisPage";

export const metadata: Metadata = {
  title: {
    default: "Browse Components",
    template: "Zed UI: %s",
  },
  description:
    "Navigate to all the components that will make your application sophisticated and elegant.",
  openGraph: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "https://zed-ui.com/open-graphs/og-browse-components.png",
        alt: "Zed UI website cover",
      },
    ],
    locale: "en",
    siteName: "Zed UI Team",
    title: "Zed UI: Browse Components",
    description:
      "Navigate to all the components that will make your application sophisticated and elegant.",
    type: "website",
    url: "https://zed-ui.com/ui",
  },
  twitter: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "https://zed-ui.com/open-graphs/og-browse-components.png",
        alt: "Zed UI website cover",
      },
    ],
    card: "summary_large_image",
    title: "Zed UI: Browse Components",
    description:
      "Navigate to all the components that will make your application sophisticated and elegant.",
    site: "@zedui",
    creator: "Zed UI Team",
  },
};

type ComponentPageLayout = {
  children: React.ReactNode;
};

export default function ComponentPageLayout({ children }: ComponentPageLayout) {
  return (
    <div className="max-w-7xl mx-auto flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10 horizontal-dotted">
      <Sidebar />
      <div className="relative xl:grid xl:grid-cols-[1fr_190px]">
        <div className="mx-auto w-full min-w-0 max-w-[640px] mt-6 max-md:px-6 mb-16 sm:mb-20">
          {children}
        </div>
        <OnThisPage />
      </div>
    </div>
  );
}

