import { cn } from "@/lib/utils";

interface StepsProps extends React.ComponentProps<"div"> {
    children: React.ReactNode;
}

export function Steps({ children, className, ...props }: StepsProps) {
    return (
        <div
            className={cn(
                "mb-12 ml-4 border-l border-neutral-200 pl-8 dark:border-neutral-900",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

interface StepProps extends React.ComponentProps<"div"> {
    title?: string;
    number?: string | number;
}

export function Step({ title, number, children, className, ...props }: StepProps) {
    return (
        <div className={cn("relative pb-10 last:pb-0", className)} {...props}>
            <div className="absolute -left-[54px] top-0 flex h-9 w-9 select-none items-center justify-center rounded-full border-[3px] border-background bg-neutral-300 dark:bg-neutral-800">
                <span className="font-semibold text-primary">{number}</span>
            </div>
            {title && (
                <h2 className="mb-4 font-medium text-primary pt-1">
                    {title}
                </h2>
            )}
            <div className="space-y-4">
                {children}
            </div>
        </div>
    );
}
