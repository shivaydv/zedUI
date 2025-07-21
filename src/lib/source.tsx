import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { icons } from "lucide-react";
import { createElement } from "react";

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  pageTree: {
    attachFile(node, file) {
      if (!file) return node;

      const data = file.data.data as unknown as {
        new: boolean;
        pro: boolean;
      };

      if (data.new || data.pro) {
        node.name = (
          <span className="flex items-center justify-between gap-2  w-full">
            {node.name}
            <span>
              {data.new && (
                <span className="border-blue-600 border bg-blue-600 text-white text-xs py-0.2 px-2 rounded-md mx-[2px]">
                  New
                </span>
              )}
              {data.pro && (
                <span className="border-orange-600 border bg-orange-600 text-white text-xs py-0.2 px-2 rounded-md mx-[2px]">
                  Pro
                </span>
              )}
            </span>
          </span>
        );
      }

      return node;
    },
  },
  icon(icon) {
    if (icon && icon in icons)
      return createElement(icons[icon as keyof typeof icons]);
  },
});

export const SidebarTree: BaseLayoutProps["links"] = [];
