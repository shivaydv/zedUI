import { Registry } from "./schema";

export const ZedUI: Registry["items"] = [
  {
    name: "dot-background",
    title: "Dot Background",
    description: "A demo showcasing a dot background component.",
    type: "registry:component",
    files: [
      {
        path: "zedUI/dot-background.tsx",
        target:"components/dot-background.tsx",
        type: "registry:component",
      },
    ],
    
  },
];
