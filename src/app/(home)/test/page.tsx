import { FAQList } from "@/registry/zedUI/FAQ";

const faqs = [
  {
    question: "What makes Zed UI unique?",
    answer:
      "Zed UI stands out through its minimal design, powerful component library, and seamless integration options.",
  },
  {
    question: "Do the components work with dark mode?",
    answer:
      "Yes, all components are designed to work seamlessly with both light and dark modes.",
  },
];

export default function Page() {
  return (
    <section className="py-20 flex flex-col justify-center items-center w-full">
      <h2 className="text-2xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <FAQList
        items={faqs}
        className=""
      />
    </section>
  );
}
