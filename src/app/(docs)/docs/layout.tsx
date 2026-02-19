import { constructMetadata } from "@/config/metadata";

export const metadata = constructMetadata({
  title: "Browse Components",
  description: "Navigate to all the components that will make your application sophisticated and elegant.",
});

type ComponentPageLayout = {
  children: React.ReactNode;
};

export default function ComponentPageLayout({ children }: ComponentPageLayout) {
  return children;
}


