import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import type { ReactNode } from "react";
import { baseOptions } from "@/src/app/layout.config";
import { source } from "@/src/lib/source";
import Logo from "@/src/components/layout/Logo";
import ThemeToggle from "@/src/components/layout/ThemeToggle";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
    
      <DocsLayout
        {...baseOptions}
        
        tree={source.pageTree}
        searchToggle={{ enabled: true }}
        themeSwitch={{
          enabled: true,
          // component: (
          //   <div className="max-md:hidden lg:hidden">
          //     <ThemeToggle />
          //   </div>
          // ),
          mode: "light-dark",
          
        }}
        nav={{
          ...baseOptions.nav,
          title: <Logo  />,

          // mode: "top",
        }}
        sidebar={{
          defaultOpenLevel:2,
          // footer: (
          //   <div className="flex items-center lg:justify-center justify-end   w-full">
          //     {/* <Logo className="hidden md:block" /> */}
          //     <div className="text-xs font-semibold text-fd-muted-foreground tracking-wide">
          //       Built with ❤️ by{" "}
          //       <a href="https://x.com/Shivay1256" className="underline font-semibold" >
          //         Shiva
          //       </a>
          //     </div>
          //   </div>
          // ),
          banner: (
            <div className="md:hidden items-center  justify-between flex border-b pb-4 ">
              <Logo />
              {/* <ThemeToggle /> */}
            </div>
          ),
          collapsible: true,
        }}
      >
        {children}
      </DocsLayout>
    </>
  );
}
