import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

export default function Header() {
  const [productOpen, setProductOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="p-8" onMouseLeave={() => setProductOpen(false)}>
      <nav className="flex flex-row justify-between max-w-[1200px] m-auto">
        <Link href="/">Fireplace Fusion</Link>
        <div className="hidden lg:flex flex-row gap-12">
          <Link href="/" className="text-primary/50 hover:text-white transition-all">
            Accueil
          </Link>
          <p className="text-primary/50 hover:text-white transition-all cursor-pointer" onClick={() => setProductOpen(!productOpen)}>
            Produits
          </p>
          <Link href="/about" className="text-primary/50 hover:text-white transition-all">
            A propos
          </Link>
          <Link href="/contact" className="text-primary/50 hover:text-white transition-all">
            Contact
          </Link>
        </div>
        <Menu className="lg:hidden cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
      </nav>
      <AnimatePresence>
        {productOpen && <DropdownMenu />}
        {mobileMenuOpen && <MobileDropdownMenu />}
      </AnimatePresence>
    </header>
  );
}

const dropdownMenuItems = [
  {
    title: "Cheminées et poêles",
    link: "/cheminees-et-poeles",
    child: [
      {
        title: "Cheminées",
        items: ["Cheminées à foyer ouvert", "Insert"],
      },
      {
        title: "Poêles",
        items: ["Poêle à bûches", "Poêle à granulés"],
      },
      {
        title: "Accessoires",
        items: ["Entretien et nettoyage", "Outils pour cheminées"],
      },
    ],
    video: 371706661,
    videoText: "Prendre un RDV",
  },
  {
    title: "Climatisation",
    link: "/climatisation",
    child: [
      {
        title: "Climatisation",
        items: ["Modèles", "Entretien"],
      },
      {
        title: "Accessoires",
        items: ["Filtre à air", "Thermostats intelligents"],
      },
    ],
    video: 1158065,
    videoText: "Obtenir un devis gratuit",
  },
  {
    title: "Panneaux solaires",
    link: "/panneaux-solaires",
    child: [
      {
        title: "Panneaux photovoltaïques",
        items: ["Modèles", "Entretien et Réparation"],
      },
      {
        title: "Accessoires",
        items: ["Systèmes de suivi solaire", "Onduleurs solaires", "Batteries de stockage"],
      },
    ],
    video: 300644367,
    videoText: "Prendre un RDV",
  },
];

const MobileDropdownMenu = () => {
  return (
    <motion.nav
      className="lg:hidden"
      initial={{
        height: 0,
      }}
      animate={{
        height: "auto",
      }}
      exit={{
        height: 0,
        transition: {
          delay: 0.25,
        },
      }}
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { delay: 0 } }} transition={{ delay: 0.25 }}>
        <Link href="/" className="font-medium hover:underline block py-4 border-b pt-8">
          Accueil
        </Link>
        <Link href="/contact" className="font-medium hover:underline block py-4 border-b">
          Contact
        </Link>
        <Accordion type="single" collapsible>
          {dropdownMenuItems.map((parent, index) => {
            return (
              <AccordionItem key={index} value={parent.title}>
                <AccordionTrigger>{parent.title}</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4">
                  {parent.child.map((child, index) => {
                    return (
                      <div key={index}>
                        <h4 className="font-normal underline">{child.title}</h4>
                        <div className="flex flex-col gap-1 mt-2">
                          {child.items.map((item, index) => {
                            return (
                              <Link key={index} href={parent.link} className="text-primary/50 hover:text-white transition-all">
                                {item}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
        <Link href="/about" className="font-medium hover:underline block py-4">
          A propos
        </Link>
      </motion.div>
    </motion.nav>
  );
};

const DropdownMenu = () => {
  const [selectedTab, setSelectedTab] = useState<null | number>(0);

  return (
    <motion.nav
      className="bg-secondary/50 hidden lg:block"
      initial={{
        height: 0,
      }}
      animate={{
        height: "250px",
      }}
      exit={{
        height: 0,
        transition: {
          delay: 0.25,
        },
      }}
    >
      <div className="flex max-w-[1200px] m-auto pt-8 px-2 h-full">
        <motion.div className="flex flex-col text-nowrap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { delay: 0 } }} transition={{ delay: 0.25 }}>
          <TabHighlighter selectedTab={selectedTab} />
          <Tabs setSelectedTab={setSelectedTab} />
        </motion.div>
        <Content selectedTab={selectedTab} />
      </div>
    </motion.nav>
  );
};

const TabHighlighter = ({ selectedTab }: { selectedTab: number | null }) => {
  const [top, setTop] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (selectedTab !== null) {
      const hoveredTab = document.getElementById(`tab-${selectedTab}`);

      if (!hoveredTab) return;

      const tabRect = hoveredTab.getBoundingClientRect();

      setTop(tabRect.top);
      setWidth(tabRect.width);
      setHeight(tabRect.height);
    }
  }, [selectedTab]);

  return <motion.div className="bg-primary absolute rounded-l-md" animate={{ width, top, height }} />;
};

const Tabs = ({ setSelectedTab }: { setSelectedTab: (index: number | null) => void }) => {
  return dropdownMenuItems.map((parent, index) => {
    return (
      <p key={index} id={`tab-${index}`} className="cursor-default p-2 z-10" onMouseEnter={() => setSelectedTab(index)}>
        {parent.title}
      </p>
    );
  });
};

const Content = ({ selectedTab }: { selectedTab: number | null }) => {
  return (
    <motion.div
      className={`transition-all p-2 rounded-md bg-primary h-full overflow-x-clip ${selectedTab === 0 ? "rounded-tl-none" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0 } }}
      transition={{ delay: 0.25 }}
    >
      {dropdownMenuItems.map((parent, index) => {
        return (
          selectedTab === index && (
            <ContentContainer key={index}>
              {parent.child.map((child, index) => {
                return <ContentItemText key={index} title={child.title} items={child.items} link={parent.link} delay={0.5 + index * 0.25} />;
              })}
              {parent.video && <ContentItemVideo videoId={parent.video} text={parent.videoText} delay={0.5 + parent.child.length * 0.25} />}
            </ContentContainer>
          )
        );
      })}
    </motion.div>
  );
};

const ContentContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex gap-8 ml-4 h-full">{children}</div>;
};

const ContentItemText = ({ title, items, link, delay }: { title: string; items: string[]; link: string; delay: number }) => {
  return (
    <motion.div
      className="flex flex-col gap-4 text-nowrap"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, transition: { delay: 0 } }}
      transition={{ delay: delay, duration: 0.5 }}
    >
      <h3 className="text-secondary text-lg font-semibold">{title}</h3>
      <div className="flex flex-col gap-2">
        {items.map((item, index) => (
          <Link key={index} href={link} className="transition-all text-secondary/75 hover:text-secondary">
            {item}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

const ContentItemVideo = ({ videoId, text, delay }: { videoId: number; text: string; delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0 } }}
      transition={{ delay: delay, duration: 0.5 }}
      className="relative rounded-md overflow-hidden"
    >
      <Link href={"/contact"} className="relative rounded-md overflow-hidden group">
        <div className="absolute size-full z-10" />
        <iframe
          className="z-20 h-full rounded-md aspect-video group-hover:scale-105 group-hover:blur-sm transition-all"
          src={`https://player.vimeo.com/video/${videoId}?muted=1&autoplay=1&loop=1&background=1&app_id=122963`}
        />
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{text}</p>
      </Link>
    </motion.div>
  );
};
