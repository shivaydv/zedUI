import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Open_Sans, Poppins } from "next/font/google";
import type { ReactNode } from "react";

const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zed UI",
  description: "Build stunning websites with ease. A modern UI library for Design Engineers — ship faster with customizable UI components.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${OpenSans.className} ${poppins.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <RootProvider theme={{ defaultTheme: "dark" }}>{children}</RootProvider>
      </body>
    </html>
  );
}
