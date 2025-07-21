import type { MDXComponents } from "mdx/types";
import defaultMdxComponents from "fumadocs-ui/mdx";
import * as FilesComponents from "fumadocs-ui/components/files";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import * as icons from "lucide-react";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { ComponentPreview } from "@components/component-preview";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { createGenerator } from "fumadocs-typescript";
import { TypeTable } from "fumadocs-ui/components/type-table";
import { AutoTypeTable } from "fumadocs-typescript/ui";

const generator = createGenerator();

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    ...(icons as unknown as MDXComponents),
    ...FilesComponents,
    ...TabsComponents,
    Accordions,
    Accordion,
    Steps,
    Step,
    TypeTable,

    AutoTypeTable: (props) => (
      <AutoTypeTable {...props} generator={generator} />
    ),
    // HTML `ref` attribute conflicts with `forwardRef`
    pre: ({ ref: _ref, ...props }) => (
      <CodeBlock {...props}>
        <Pre>{props.children}</Pre>
      </CodeBlock>
    ),
    // Add any additional components or overrides here
    ComponentPreview,
  };
}
