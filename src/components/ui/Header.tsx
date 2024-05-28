"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [productOpen, setProductOpen] = useState(false);

  return (
    <header className="bg-primary p-8" onMouseLeave={() => setProductOpen(false)}>
      <nav className="flex flex-row justify-between max-w-[1200px] m-auto">
        <Link href="/">Fireplace Fusion</Link>
        <div className="flex flex-row gap-12">
          <Link href="/" className="text-primary/60 hover:text-primary transition-all">
            Accueil
          </Link>
          <p className="text-primary/60 hover:text-primary transition-all cursor-pointer" onClick={() => setProductOpen(!productOpen)}>
            Produits
          </p>
          <Link href="/" className="text-primary/60 hover:text-primary transition-all">
            A propos
          </Link>
          <Link href="/" className="text-primary/60 hover:text-primary transition-all">
            Contact
          </Link>
        </div>
      </nav>
      <AnimatePresence mode="wait">{productOpen && <DropdownMenu />}</AnimatePresence>
    </header>
  );
}

const DropdownMenu = () => {
  const [selectedTab, setSelectedTab] = useState<null | number>(0);

  const TABS = [
    {
      title: "Cheminées et poêles",
      Component: ChemineesEtPoeles,
    },
    {
      title: "Climatisation",
      Component: Climatisation,
    },
    {
      title: "Panneaux solaires",
      Component: PanneauxSolaires,
    },
  ];

  return (
    <motion.div
      className="bg-primary/50"
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
        <motion.div className="flex flex-col" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { delay: 0 } }} transition={{ delay: 0.25 }}>
          <TabHighlighter selectedTab={selectedTab} />
          <Tabs tabs={TABS} setSelectedTab={setSelectedTab} />
        </motion.div>
        <Content tabs={TABS} selectedTab={selectedTab} />
      </div>
    </motion.div>
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

  return <motion.div className="bg-secondary absolute rounded-l-md" animate={{ width, top, height }} />;
};

const Tabs = ({ tabs, setSelectedTab }: { tabs: { title: string; Component: () => JSX.Element }[]; setSelectedTab: (index: number | null) => void }) => {
  return tabs.map((item, index) => (
    <p key={index} id={`tab-${index}`} className={`cursor-default p-2 z-10`} onMouseEnter={() => setSelectedTab(index)}>
      {item.title}
    </p>
  ));
};

const Content = ({ tabs, selectedTab }: { tabs: { title: string; Component: () => JSX.Element }[]; selectedTab: number | null }) => {
  return (
    <motion.div
      className={`transition-all p-2 rounded-md bg-secondary ${selectedTab === 0 ? "rounded-tl-none" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0 } }}
      transition={{ delay: 0.25 }}
    >
      {tabs.map(
        (item, index) =>
          selectedTab === index && (
            <div key={index} className="h-full">
              <item.Component />
            </div>
          )
      )}
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

const ChemineesEtPoeles = () => {
  const link = "/cheminees-et-poeles";
  return (
    <ContentContainer>
      <ContentItemText title={"Cheminées"} items={["Cheminées à foyer ouvert", "Insert"]} link={link} delay={0.5} />
      <ContentItemText title={"Poêles"} items={["Poêle à bûches", "Poêle à granulés"]} link={link} delay={0.75} />
      <ContentItemText title={"Accessoires"} items={["Entretien et nettoyage", "Outils pour cheminées"]} link={link} delay={1} />
      <ContentItemVideo videoId={371706661} text={"Prendre un RDV"} delay={1.25} />
    </ContentContainer>
  );
};

const Climatisation = () => {
  const link = "/climatisation";
  return (
    <ContentContainer>
      <ContentItemText title={"Climatisation"} items={["Modèles", "Entretien"]} link={link} delay={0.5} />
      <ContentItemText title={"Accessoires"} items={["Filtre à air", "Thermostats intelligents"]} link={link} delay={0.75} />
      <ContentItemVideo videoId={1158065} text={"Obtenir un devis gratuit"} delay={1} />
    </ContentContainer>
  );
};

const PanneauxSolaires = () => {
  const link = "/panneaux-solaires";
  return (
    <ContentContainer>
      <ContentItemText title={"Panneaux photovoltaïques"} items={["Modèles", "Entretien et Réparation"]} link={link} delay={0.5} />
      <ContentItemText title={"Accessoires"} items={["Systèmes de suivi solaire", "Onduleurs solaires", "Batteries de stockage"]} link={link} delay={0.75} />
      <ContentItemVideo videoId={300644367} text={"Prendre un RDV"} delay={1} />
    </ContentContainer>
  );
};
