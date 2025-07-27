import React from "react";
import DotBackground from "@/registry/zedUI/dot-background";

const DotBackgroundDemo = () => {
  return (
    <div className="relative h-[50vh] w-full"> {/* Parent */ }
      <DotBackground />
      <div className=" flex items-center justify-center w-full h-full z-10 relative">
        {/* Children or section */}
      </div>
    </div>
  );
};

export default DotBackgroundDemo;
