import { Metadata } from "next";
import Link from "next/link";
import { UPDATES } from "@/data/updates";
import { AnimateEnter } from "@/components/shared/AnimateEnter";
import { constructMetadata } from "@/config/metadata";
import { BlurImage } from "@/components/shared/BlurImage";

export const metadata: Metadata = constructMetadata({
    title: "Updates",
    description: "Stay up to date with the latest features and improvements to Zed UI.",
});

export default function UpdatesPage() {
    return (
        <main className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <AnimateEnter delay={0.1}>
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">Updates</h2>
                    <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                        Keep up with our latest releases, announcements, and deep dives into the world of premium UI.
                    </p>
                </div>
            </AnimateEnter>

            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {UPDATES.map((update, index) => (
                    <AnimateEnter key={update.href} delay={0.2 + index * 0.1}>
                        <article className="flex flex-col items-start justify-between group">
                            <Link href={`/updates/${update.href}`} className="relative w-full aspect-video overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-border">
                                <BlurImage
                                    src={update.banner || ""}
                                    alt={update.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </Link>
                            <div className="max-w-xl">
                                <div className="mt-8 flex items-center gap-x-4 text-xs text-neutral-500">
                                    <time dateTime={update.date}>{update.date}</time>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-xl font-semibold leading-6 text-primary group-hover:text-primary/80">
                                        <Link href={`/updates/${update.href}`}>
                                            <span className="absolute inset-0" />
                                            {update.title}
                                        </Link>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                                        {update.description}
                                    </p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <img
                                        src={update.author_image}
                                        alt={update.author}
                                        className="h-10 w-10 rounded-full bg-neutral-50"
                                    />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-primary">
                                            {update.author}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </AnimateEnter>
                ))}
            </div>
        </main>
    );
}
