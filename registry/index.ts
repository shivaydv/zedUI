import { z } from "zod";
import { ZedUI } from "./registry-ui";
import { Registry, registryItemSchema } from "./schema";
import { RegistryDemo } from "./registry-demo";

export const registry = {
  name: "Zed UI",
  homepage: "https://zedui.vercel.app",
  items: z.array(registryItemSchema).parse([...ZedUI, ...RegistryDemo]),
} satisfies Registry;
