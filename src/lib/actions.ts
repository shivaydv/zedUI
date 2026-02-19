"use server";

import { getDocs } from "./mdx";

export async function getAllComponents() {
    const components = getDocs().sort((a, b) =>
        a.title.localeCompare(b.title)
    );

    // Return only serializable data
    return components.map(c => ({
        title: c.title,
        slug: c.slug,
        isNew: c.isNew || false
    }));
}
