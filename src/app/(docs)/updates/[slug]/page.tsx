import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getDocs } from "@/lib/mdx";

import { MDX } from "@/components/mdx/MDXComponents";
import { BlurImage } from "@/components/shared/BlurImage";
import { Divider } from "@/components/shared/Divider";

const Docs = getDocs("updates").sort((a, b) => a.title.localeCompare(b.title));

export async function generateStaticParams() {
  return Docs.map((docs) => ({
    slug: docs.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;

  const docs = Docs.find((docs) => docs.slug === slug);

  if (!docs) {
    return;
  }

  const { title, description, slug: slugDocs, banner } = docs;

  return {
    title,
    description,
    openGraph: {
      title: `Zed UI: ${title}`,
      description,
      type: "website",
      url: `https://zed-ui.com/updates/${slugDocs}`,
      images: [
        {
          width: 1920,
          height: 1080,
          url: `https://zed-ui.com${banner}`,
          alt: `${title} cover`,
        },
      ],
    },
    twitter: {
      title: `Zed UI: ${title}`,
      description,
      card: "summary_large_image",
      images: [
        {
          width: 1920,
          height: 1080,
          url: `https://zed-ui.com${banner}`,
          alt: `${title} cover`,
        },
      ],
    },
  };
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const docs = Docs.find((docs) => docs.slug === slug);

  if (!docs) notFound();

  const { title, content, date, author, author_image, author_twitter, banner } =
    docs;

  return (
    <main className="flex flex-col gap-10 w-full max-w-5xl mx-auto px-6 py-32">
      <div className="space-y-14">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-4">
              <a
                href={author_twitter!}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5"
              >
                <div className="rounded-full overflow-hidden">
                  <BlurImage
                    src={author_image!}
                    alt={`${author!.split(" ")[0]}'s profile picture`}
                    className="rounded-full"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="text-gradient text-sm font-[460]">
                  {author}
                </span>
              </a>
              <Divider />
              <span className="text-gradient text-sm font-[460]">{date}</span>
            </div>
            <h1 className="font-normal text-4xl text-gradient tracking-tight md:text-5xl">
              {title}
            </h1>
          </div>
          <div className="overflow-hidden border border-transparent dark:border-neutral-900 rounded-2xl">
            <BlurImage
              src={banner!}
              alt={`${title} cover`}
              className="object-cover"
            />
          </div>
        </div>
        <MDX source={content} />
      </div>
    </main>
  );
}
