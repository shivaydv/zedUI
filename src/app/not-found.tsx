import Logo from "@/src/components/layout/Logo";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex-1 justify-center items-center flex flex-col">
      <Logo className="text-4xl" />
      <p className="my-4 ">
        Opps! - page you&apos;re looking for doesn&apos;t exist.
      </p>
    </div>
  );
}
