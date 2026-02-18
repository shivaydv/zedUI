import { Footer } from "@/components/shared/Footer";

export default function UpdatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}


