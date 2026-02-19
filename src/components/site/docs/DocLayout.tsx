import { Sidebar } from "@/components/site/navigation/sidebar/Sidebar";
import { OnThisPage } from "@/components/site/docs/OnThisPage";
import { cn } from "@/lib/utils";

type DocLayoutProps = {
    children: React.ReactNode;
    variant?: "default" | "wide";
};

export function DocLayout({ children, variant = "default" }: DocLayoutProps) {
    const isWide = variant === "wide";

    return (
        <div className="max-w-7xl mx-auto flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10 horizontal-dotted">
            <Sidebar />
            <div className={cn("relative w-full", !isWide && "xl:grid xl:grid-cols-[1fr_190px]")}>
                <div className={cn(
                    "mx-auto w-full min-w-0 mt-6 mb-16 sm:mb-20 px-4 md:px-8",
                    isWide ? "max-w-full" : "max-w-[640px]"
                )}>
                    {children}
                </div>
                {!isWide && <OnThisPage />}
            </div>
        </div>
    );
}
