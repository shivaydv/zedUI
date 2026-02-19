import { Metadata } from "next";
import { siteConfig } from "./site";

export const constructMetadata = ({
    title = siteConfig.name,
    description = siteConfig.description,
    noIndex = false,
}: {
    title?: string;
    description?: string;
    noIndex?: boolean;
} = {}): Metadata => {
    return {
        title: {
            default: title,
            template: `%s | ${siteConfig.name}`,
        },
        description,
        keywords: siteConfig.keywords,
        authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
        creator: siteConfig.author.name,
        publisher: siteConfig.author.name,
        metadataBase: new URL(siteConfig.url),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    };
};
