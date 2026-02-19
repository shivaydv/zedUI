import { getFileContent } from "@/utils/get-file-content";
import { CodeBlock } from "./CodeBlock";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

interface RegistryCodeBlockProps {
    name: string;
    type?: "ui" | "hooks" | "blocks" | "lib" | "utils";
    extension?: string;
    className?: string;
    customPath?: string;
}

export async function RegistryCodeBlock({
    name,
    type = "ui",
    extension = "tsx",
    className,
    customPath,
}: RegistryCodeBlockProps) {
    const fileName = `${name}.${extension}`;

    // Resolve path: if customPath is provided, use it. 
    // Otherwise, if type is 'lib' or 'utils', look in those src subfolders.
    // Default is registry/[type]
    let relativePath = `registry/${type}`;
    if (customPath) {
        relativePath = customPath;
    } else if (type === "lib" || type === "utils") {
        relativePath = type;
    }

    let content = "";
    try {
        content = getFileContent(relativePath, fileName);
    } catch (e) {
        content = `// Error: Could not find ${relativePath}/${fileName}`;
    }

    const mdxSource = `\`\`\`${extension}\n${content}\n\`\`\``;

    return (
        <CodeBlock
            fileName={fileName}
            className={className}
            simpleCode={content}
        >
            <MDXRemote
                source={mdxSource}
                options={{
                    mdxOptions: {
                        remarkPlugins: [remarkGfm],
                        rehypePlugins: [
                            rehypeSlug,
                            [
                                rehypePrettyCode,
                                {
                                    theme: {
                                        dark: "github-dark",
                                        light: "github-light",
                                    },
                                    keepBackground: false,
                                    defaultLang: extension,
                                },
                            ],
                        ],
                    },
                }}
            />
        </CodeBlock>
    );
}
