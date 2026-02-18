import { ComponentView } from "@/components/site/docs/ComponentView";
import { AnimateEnter } from "@/components/shared/AnimateEnter";
import { cn } from "@/utils/cn";
import { Button } from "@/registry/button";

const COMPONENTS_EXAMPLE = [
  { component: <Button variant="shine">Shine Button</Button>, className: "", componentViewClassName: "" },
  { component: <Button variant="animated-border">Animated Border</Button>, className: "", componentViewClassName: "" },
  { component: <Button variant="rotate-border">Rotate Border</Button>, className: "", componentViewClassName: "" },
  { component: <Button variant="glitch-brightness">Glitch Button</Button>, className: "", componentViewClassName: "" },
  { component: <Button variant="outline">Outline Button</Button>, className: "", componentViewClassName: "" },
  { component: <Button variant="destructive">Destructive</Button>, className: "", componentViewClassName: "" },
];

export function ComponentsExample() {
  return (
    <div className="grid gap-5 md:grid-cols-3 w-full">
      {COMPONENTS_EXAMPLE.map(
        ({ component, className, componentViewClassName }, idx) => (
          <AnimateEnter key={idx} delay={idx * 0.03} className={className}>
            <ComponentView
              className={cn(
                "flex min-h-[250px] items-center justify-center",
                componentViewClassName
              )}
            >
              {component}
            </ComponentView>
          </AnimateEnter>
        )
      )}
    </div>
  );
}
