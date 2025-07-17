import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";
import FooterSection from "@/components/landingPage/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout {...baseOptions} className="  flex flex-col  min-h-screen ">
      <div className="flex-1 w-full h-full">{children}</div>
      <FooterSection />
    </HomeLayout>
  );
}
