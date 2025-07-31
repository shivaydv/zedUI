import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import {
  LayoutPanelTop,
  Star,
  Sparkles,
  Users,
  SunDim,
  Book,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "@/src/components/layout/Logo";
// import ThemeToggle from "@/components/layout/ThemeToggle";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <Logo />,
    transparentMode: "top",
  },
  githubUrl: "https://github.com/shivaydv/ZedUI",
  searchToggle: { enabled: true },
  themeSwitch: {
    // component: <ThemeToggle />,
    mode: "light-dark",
    enabled: true,
  },
  links: [
    // {
    //   text: "Documentaion",
    //   url: "/docs",
    //   active: "nested-url",
    //   icon: <Book />,
    // },
    {
      text: "Components",
      url: "/docs/components",
      active: "url",
      icon: <LayoutPanelTop />,
    },
    // {
    //   text: "Showcase",
    //   url: "/showcase",
    //   active: "nested-url",
    //   icon: <Sparkles />,
    // },
    // {
    //   text: "Sponsors",
    //   url: "/sponsors",
    //   active: "nested-url",
    //   icon: <Star />,
    // },
    {
      text: "Community",
      url: "https://github.com/shivaydv/zedUI/discussions",
      external: true,
      icon: <Users />,
    },
    {
      type: "icon",
      icon: <FaXTwitter />,
      label: "Twitter",
      text: "Twitter",
      url: "https://x.com/Shivay1256",
    },
    // {
    //   type: "custom",
    //   children: (
    //     <div className="max-lg:hidden">
    //       <ThemeToggle />
    //     </div>
    //   ),
    //   on: "menu",
    //   secondary: true,
    // },
  ],
};
