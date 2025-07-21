import * as React from "react";
import { ComponentSourceClient } from "./component-source-client";
import { getRegistryContent } from "../lib/registry";

export async function ComponentSource({
  name,
  title,
}: {
  name?: string;
  title?: string;
}) {
  if (!name) return null;

  const content = await getRegistryContent(name);
  const lang = title?.split(".").pop() ?? "tsx";

  if (!content)
    return (
      <p className="text-sm text-muted-foreground">
        Component{" "}
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
          {name}
        </code>{" "}
        not found in registry.
      </p>
    );

  return <ComponentSourceClient lang={lang} code={content} title={title} />;
}
