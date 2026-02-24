import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDocs } from "@/lib/mdx";
import { MDX } from "@/components/mdx/MDXComponents";
import { constructMetadata } from "@/config/metadata";
import { AnimateEnter } from "@/components/shared/AnimateEnter";
import { BlurImage } from "@/components/shared/BlurImage";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export async function generateStaticParams() {
    const updates = getDocs("updates");
    return updates.map((update) => ({
        slug: update.slug,
    }));
}

export const dynamicParams = false;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
    const { slug } = await params;
    const updates = getDocs("updates");
    const update = updates.find((d) => d.slug === slug);

    if (!update) return;

    return constructMetadata({
        title: update.title,
        description: update.description,
    });
}

export default async function UpdatePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const updates = getDocs("updates");
    const update = updates.find((d) => d.slug === slug);

    if (!update) notFound();

    return (
        <main className="mx-auto max-w-3xl px-6 py-24 sm:py-32 lg:px-8">
            <AnimateEnter delay={0.1}>
                <Link
                    href="/updates"
                    className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-primary transition-colors mb-12"
                >
                    <ChevronLeft size={16} />
                    Back to Updates
                </Link>

                <header className="space-y-8">
                    <div className="space-y-4">
                        <time dateTime={update.date} className="text-sm text-neutral-500">
                            {update.date}
                        </time>
                        <h1 className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
                            {update.title}
                        </h1>
                        <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            {update.description}
                        </p>
                    </div>

                    <div className="flex items-center gap-4 py-6 border-y border-border">
                        <img
                            src={update.author_image || ""}
                            alt={update.author || "Author"}
                            className="h-10 w-10 rounded-full"
                        />
                        <div className="text-sm">
                            <p className="font-semibold text-primary">{update.author || "Author"}</p>
                            {update.author_twitter && (
                                <a
                                    href={update.author_twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-neutral-500 hover:text-primary transition-colors"
                                >
                                    @{update.author_twitter.split("/").pop()}
                                </a>
                            )}
                        </div>
                    </div>
                </header>

                <div className="mt-12 relative aspect-video overflow-hidden rounded-2xl border border-border">
                    <BlurImage
                        src={update.banner || ""}
                        alt={update.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="mt-16 space-y-6">
                    <MDX source={update.content} />
                </div>
            </AnimateEnter>
        </main>
    );
}
