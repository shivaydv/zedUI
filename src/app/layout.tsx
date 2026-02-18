import type { Metadata } from "next";
import { fontSans, fontMono } from "@/utils/fonts";

import "@/styles/globals.css";

import { cn } from "@/utils/cn";

import { ThemeProvider } from "./theme-provider";
import { Header } from "./ui/_components/Header";

export const metadata: Metadata = {
  authors: [{ name: "Zed UI Team", url: "https://zed-ui.com" }],
  category: "developer",
  creator: "Zed UI Team",
  title: {
    default: "Zed UI: Modern Component Library",
    template: "Zed UI: %s",
  },
  description:
    "Library of copy and paste components to build beautiful apps with elegance and sophistication.",
  icons: ["/favicon.svg"],
  keywords: [
    "Zed UI",
    "zed-ui.com",
    "Motion",
    "UI Design",
    "UI Library",
    "Design Engineer",
    "Frontend Developer",
    "Component library",
    "Frontend",
    "Copy and Paste",
    "CLI",
    "Command Line Interface",
    "Dark Mode",
    "Light Mode",
    "UX Design",
    "Developer",
    "Software",
    "Design",
    "Vercel",
    "Next.js",
    "React",
    "TypeScript",
    "TailwindCSS",
    "Framer Motion",
    "Server Components",
    "Client Components",
  ],
  openGraph: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "https://zed-ui.com/open-graphs/og-website.png",
        alt: "Zed UI website cover",
      },
    ],
    locale: "en",
    siteName: "Zed UI",
    title: "Zed UI",
    description:
      "Copy and paste components ready to use. Practical. Customizable.",
    type: "website",
    url: "https://zed-ui.com",
  },
  publisher: "Zed UI Team",
  twitter: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "https://zed-ui.com/open-graphs/og-website.png",
        alt: "Zed UI website cover",
      },
    ],
    card: "summary_large_image",
    title: "Zed UI: Modern Component Library",
    description:
      "Copy and paste components ready to use. Practical. Customizable.",
    site: "@zedui",
    creator: "Zed UI Team",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "overflow-x-hidden bg-background font-sans text-foreground antialiased outline-none",
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

