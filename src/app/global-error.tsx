"use client";

import Logo from "@/src/components/layout/Logo";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex-1 justify-center items-center flex flex-col min-h-screen bg-background text-fd-foreground">
          <Logo className="text-4xl" />
          <p className="mb-4 mt-2 max-w-2xl text-center text-lg font-semibold">
            Something went wrong
          </p>
          {/* <button className=" px-3 font-semibold capitalize tracking-wide bg-foreground text-background  py-1 rounded-md" onClick={() => reset()}>Try again</button> */}
        </div>
      </body>
    </html>
  );
}
