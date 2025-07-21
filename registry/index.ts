import { z } from "zod";
import { AxiomiteUI } from "./registry-ui";
import { Registry, registryItemSchema } from "./schema";
import { RegistryDemo } from "./registry-demo";

export const registry = {
  name: "Axiomite UI",
  homepage: "https://axiomiteui.vercel.app",
  items: z.array(registryItemSchema).parse([...AxiomiteUI, ...RegistryDemo]),
} satisfies Registry;
