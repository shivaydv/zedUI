import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import { remarkTypeScriptToJavaScript } from 'fumadocs-docgen/remark-ts2js';
import { remarkInstall } from 'fumadocs-docgen';
import { rehypeCodeDefaultOptions } from 'fumadocs-core/mdx-plugins';
import { z } from "zod";

// Custom rehype plugin to remove [!code highlight] comments
function rehypeRemoveHighlightComments() {
  return (tree: any) => {
    function processNode(node: any) {
      if (node.type === 'text') {
        // Remove [!code highlight] comments from text nodes
        node.value = node.value
          .replace(/\/\/ \[!code highlight\]/g, '')
          .replace(/\/\* \[!code highlight\]\*\//g, '')
          .replace(/\/\/ \[!code highlight\]/g, '')
          .replace(/\/\* \[!code highlight\]\*\//g, '');
      } else if (node.children) {
        // Process child nodes
        node.children = node.children.filter((child: any) => {
          if (child.type === 'text' && child.value.trim() === '// [!code highlight]') {
            return false; // Remove standalone comment nodes
          }
          if (child.type === 'text' && child.value.trim() === '/* [!code highlight]*/') {
            return false; // Remove standalone comment nodes
          }
          processNode(child);
          return true;
        });
      }
    }
    
    processNode(tree);
    return tree;
  };
}

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
  docs: {
    schema: frontmatterSchema.extend({
      // Add custom frontmatter fields here
      
      new: z.boolean().default(false).optional(),
      pro: z.boolean().default(false).optional(),
    }),
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    // MDX options
    remarkPlugins: [remarkInstall,remarkTypeScriptToJavaScript],
    remarkCodeTabOptions: {
      parseMdx: true,
    },
    rehypeCodeOptions: {
      ...rehypeCodeDefaultOptions,
    },
    rehypePlugins: [rehypeRemoveHighlightComments],
  },
});
