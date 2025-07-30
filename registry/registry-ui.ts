import { Registry } from "./schema";

export const ZedUI: Registry["items"] = [
  {
    name: "dot-background",
    title: "Dot Background",
    description: "A dot background component.",
    type: "registry:component",
    files: [
      {
        path: "zedUI/dot-background.tsx",
        target:"components/dot-background.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "faq",
    title: "FAQ",
    description: "A FAQ component.",
    type: "registry:component",
    files: [
      {
        path: "/zedUI/FAQ.tsx",
        type: "registry:component",
        target: "components/FAQ.tsx",
      }
    ],
    dependencies: ["motion"]
  }
];
