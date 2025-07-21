import { ComponentWrapper } from "@/src/components/component-wrapper";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "fumadocs-ui/components/tabs";
import * as React from "react";
import Loader from "./layout/Loader";
import { ComponentSource } from "./component-source";
import { getRegistryComponent } from "../lib/registry";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  title?: string;
  display?: "code" | "preview" | "both";
  reload?: boolean;
}

export function ComponentPreview({
  name,
  display = "both",
  title,
  reload = false,
}: ComponentPreviewProps) {
  const Component = getRegistryComponent(name);

  const Preview = React.useMemo(() => {
    if (!Component) {
      console.error(`Component with name "${name}" not found in registry.`);
      return (
        <p className="text-sm text-muted-foreground">
          Component{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {name}
          </code>{" "}
          not found in registry.
        </p>
      );
    }
    return <Component />;
  }, [name]);

  return (
    <Tabs
      defaultValue={display === "both" ? "preview" : display}
      className="w-full"
    >
      {display === "both" && (
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
      )}
      {display !== "code" && (
        <TabsContent
          value="preview"
          className={`${display === "preview" && " p-1.5 bg-seconday/10"}`}
        >
          <ComponentWrapper
            reload={reload}
            className={`${display === "preview" && "border"}`}
          >
            <React.Suspense
              fallback={
                <div className="flex items-center text-sm text-muted-foreground">
                  <Loader />
                </div>
              }
            >
              {Preview}
            </React.Suspense>
          </ComponentWrapper>
        </TabsContent>
      )}
      {display !== "preview" && (
        <TabsContent value="code">
          <ComponentSource name={name} title={title} />
        </TabsContent>
      )}
    </Tabs>
  );
}
