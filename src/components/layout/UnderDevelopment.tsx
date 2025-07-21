import { cn } from "@/src/lib/utils";

const UnderDevelopment = ({className,title="Page"}:{className?:string,title?:string}) => {
  return (
    <div className={cn("flex flex-col items-center justify-center space-y-8 py-24 px-4 text-center flex-1",className)}>
      <div className="space-y-6">
        <h2 className="text-4xl mt-0 font-bold tracking-tighter ">
          {title} In Development
        </h2>
        <p className="mx-auto max-w-md text-fd-muted-foreground md:text-xl">
          We're currently working on this page to bring you the best experience.
          
          Stay tuned for updates!
        </p>
      </div>
    </div>
  );
};

export default UnderDevelopment;
