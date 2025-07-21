import { Index } from "@/registry/__index__";

export function getRegistryComponent(name: string) {
  return Index[name]?.component;
}

export async function getRegistryContent(name: string) {
  const item = Index[name];
  if (!item) return null;

  // Return the first content file
  return item.content[0];
}
