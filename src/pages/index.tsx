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
    <>
      <main className="h-screen">
        <section className="flex flex-row h-full overflow-hidden">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`relative flex-grow transition-all duration-700 hover:flex-grow-[1.5] h-full ${getOpacityBasedOnHover(index)}`}
              onMouseEnter={() => setHoveredDiv(index)}
              onMouseLeave={() => setHoveredDiv(-1)}
            >
              <Image src={item.imageSrc} alt={item.text} fill objectFit="cover" />
              <p className="absolute left-1/2 bottom-1/4 -translate-x-1/2 text-4xl text-center font-semibold uppercase max-w-72">{item.text}</p>
            </Link>
          ))}
        </section>
      </main>
      <footer className="flex justify-around">
        <div className="p-[50px] w-1/2 flex justify-center">
          <div className="w-fit">
            <h1 className="text-2xl font-bold">Fireplace Fusion</h1>
            <p className="text-sm">A demo app made with Next.js and PayloadCMS</p>
          </div>
        </div>
        <div className="p-[50px] w-1/2">
          Bienvenue chez Fireplace Fusion, votre destination ultime pour l&apos;intégration élégante de confort et de durabilité dans votre foyer. Spécialisés dans la vente de cheminées, poêles à
          bois, panneaux solaires et systèmes de climatisation, nous vous offrons des solutions énergétiques qui allient tradition, modernité et respect de l&apos;environnement.
        </div>
      </footer>
    </>
  );
}
