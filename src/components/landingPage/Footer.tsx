import Logo from "@/src/components/layout/Logo";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    group: "Menu",
    items: [
      {
        title: "Components",
        href: "docs/components",
      },
      {
        title: "Community",
        href: "https://github.com/shivaydv/zedUI/discussions",
      },
      // {
      //   title: "Showcase",
      //   href: "/showcase",
      // },
      // {
      //   title: "Sponsors",
      //   href: "/sponsors",
      // },
    ],
  },
  {
    group: "Lorem",
    items: [
      {
        title: "Menu 1",
        href: "#",
      },
      {
        title: "Menu 2",
        href: "#",
      },
      {
        title: "Menu 3",
        href: "#",
      },
    ],
  },
  {
    group: "Social",
    items: [
      {
        title: "Github",
        href: "https://github.com/shivaydv",
      },
      {
        title: "Twitter",
        href: "https://x.com/Shivay1256",
      },
      {
        title: "Youtube",
        href: "https://www.youtube.com/@shivay1256",
      },
    ],
  },
  {
    group: "Other Products",
    items: [
      {
        title: "Dev Axioms",
        href: "https://devaxioms.vercel.app/",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t">
      <div className=" px-6 w-full max-w-fd-container mx-auto  pt-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 space-y-4 lg:space-y-0">
          {links.map((link, index) => (
            <div key={index} className="space-y-4 text-sm ">
              <span className="block font-semibold">{link.group}</span>
              {link.items.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="text-fd-muted-foreground hover:text-fd-primary block duration-150"
                >
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="relative w-full overflow-hidden ">
          <span
            className="pointer-events-none select-none w-full h-full relative z-10 flex justify-center items-center shrink-0 text-nowrap font-extrabold text-[14vw]"
            style={{
              filter: "brightness(30%)",
              maskImage:
                "linear-gradient(to top, transparent 0%, var(--foreground) 100%)",
              WebkitMaskImage:
                "linear-gradient(to top, transparent 0%, var(--foreground) 100%)",
            }}
          >
            Zed UI
          </span>
        </div>
      </div>
    </footer>
  );
}
