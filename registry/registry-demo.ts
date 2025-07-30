import { Registry } from "./schema";

export const RegistryDemo: Registry["items"] = [
  {
    name: "dot-background-demo",
    title: "Dot Background Demo",
    description: "A demo showcasing a dot background component.",
    type: "registry:component",
    files: [
      {
        path: "/demo/dot-background-demo.tsx",
        type: "registry:component",
        target: "components/dot-background-demo.tsx",
      },
    ],
  },
  {
    name: "faq-demo",
    title: "FAQ Demo",
    description: "A demo showcasing a FAQ component.",
    type: "registry:component",
    files: [
      {
        path: "/demo/FAQ-demo.tsx",
        type: "registry:component",
        target: "components/FAQ-demo.tsx",
      }
    ],
    dependencies: ["motion"]
  }
];
