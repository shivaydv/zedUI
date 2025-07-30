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
      "Yes, all components are designed to work seamlessly with both light and dark modes.Yes, all components are designed to work seamlessly with both light and dark modes.Yes, all components are designed to work seamlessly with both light and dark modes.",
  },
  {
    question: "How can I contribute to Zed UI?",
    answer:
      "You can contribute by submitting issues, pull requests, or suggestions on our GitHub repository.",
  },
  {
    question: "Is Zed UI compatible with React?",
    answer:
      "Yes, Zed UI components are built with React and are fully compatible with React applications.",
  },
  {
    question: "Where can I find the documentation for Zed UI?",
    answer:
      "Documentation is available on our official website, providing detailed guides and examples for each component.",
  },
];

export default function FaqDemo() {
  return (
    <section className="flex justify-center items-center flex-col w-full py-10 md:py-20 md:px-10 ">
      <h2 className="text-2xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <FAQList items={faqs} />
    </section>
  );
}
