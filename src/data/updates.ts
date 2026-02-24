type Update = {
  href: string;
  title: string;
  description: string;
  author: string;
  banner: string;
  author_image: string;
  date: string;
};

export const UPDATES: Update[] = [
  {
    href: "v1",
    title: "Introducing Zed UI v1.0",
    description:
      "The official launch of Zed UI is here. Discover how we're redefining the modern web through 'Quiet Luxury', high-fidelity motion, and developer-centric primitives.",
    author: "Shiva Yadav",
    banner: "/open-graphs/updates/v1.0.png",
    author_image: "https://github.com/shivaydv.png",
    date: "February 24, 2026",
  },
];
