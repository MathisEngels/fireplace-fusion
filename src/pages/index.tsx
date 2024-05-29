import HomepageSlide from "@/components/Layout/HomepageSlide";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Homepage() {
  const [hoveredDiv, setHoveredDiv] = useState(-1);

  const items = [
    {
      href: "/cheminees",
      imageSrc: "/cheminees.jpeg",
      text: "Cheminées et Poêles",
    },
    {
      href: "/climatisations",
      imageSrc: "/climatisations.jpeg",
      text: "Climatisations",
    },
    {
      href: "/panneaux-solaires",
      imageSrc: "/panneau-solaire.jpeg",
      text: "Panneaux solaires",
    },
  ];

  const getOpacityBasedOnHover = (index: number): string => (hoveredDiv === -1 ? "opacity-100" : hoveredDiv === index ? "opacity-100" : "opacity-50");

  return (
    <HomepageSlide>
      <main className="h-screen">
        <section className="flex flex-col md:flex-row h-full overflow-hidden">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`relative flex-grow transition-all duration-700 hover:flex-shrink-[0.5] md:hover:flex-grow-[1.5] h-full ${getOpacityBasedOnHover(index)}`}
              onMouseEnter={() => setHoveredDiv(index)}
              onMouseLeave={() => setHoveredDiv(-1)}
            >
              <Image src={item.imageSrc} alt={item.text} fill className="object-cover" />
              <p className="absolute left-1/2 bottom-1/4 -translate-x-1/2 text-4xl text-center font-semibold uppercase max-w-72">{item.text}</p>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </HomepageSlide>
  );
}
