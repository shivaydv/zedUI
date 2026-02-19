import type { Metadata } from "next";
import { fontSans, fontMono } from "@/utils/fonts";

import "@/styles/globals.css";

import { cn } from "@/utils/cn";

import { ThemeProvider } from "./theme-provider";
import { Header } from "@/components/site/navigation/Header";

import { constructMetadata } from "@/config/metadata";

export const metadata = constructMetadata();

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

