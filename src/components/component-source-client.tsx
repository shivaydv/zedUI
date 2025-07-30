"use client";
import * as React from "react";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { FaReact } from "react-icons/fa6";
import { MdOutlineInsertDriveFile } from "react-icons/md";

export function ComponentSourceClient({
  title,
  code,
  lang,
}: {
  title?: string;
  code: string;
  lang: string;
}) {
  function pre(props: React.ComponentProps<"pre">) {
    return (
      <CodeBlock
        {...props}
        title={title}
        lang={lang}
        icon={
          ["tsx", "jsx"].includes(lang) ? (
            <FaReact />
          ) : (
            <MdOutlineInsertDriveFile />
          )
        }
        style={{
          backgroundColor: "#0a0a0a",
        }}
      >
        <Pre>{props.children}</Pre>
      </CodeBlock>
    );
  }

  return (
    <DynamicCodeBlock
      lang={lang}
      code={code}
      options={{
        theme: "github-dark-default",
        components: { pre },
      }}
    />
  );
}
