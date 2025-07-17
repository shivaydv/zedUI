import fs from "node:fs/promises";
import path from "node:path";
import * as React from "react";

import { getRegistryItem } from "@/lib/registry";
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';

export async function ComponentSource({
  name,
  src,
  title,
  language,
}: React.ComponentProps<"div"> & {
  name?: string;
  src?: string;
  title?: string;
  language?: string;
  collapsible?: boolean;
}) {
  if (!name && !src) {
    return null;
  }

  let code: string | undefined;

  if (name) {
    const item = await getRegistryItem(name);
    code = item?.files?.[0]?.content;
  }

  if (src) {
    const file = await fs.readFile(path.join(process.cwd(), src), "utf-8");
    code = file;
  }

  if (!code) {
    return null;
  }

  const lang = language ?? title?.split(".").pop() ?? "tsx";

  return <DynamicCodeBlock  lang={lang} code={code} />;
}
