import Slide from "@/components/Layout/Slide";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import { TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function index() {
  return (
    <Slide>
      <Header />
      <main>
        <section className="px-8">
          <div className="max-w-[1200px] mx-auto md:mt-6 xl:mt-12">
            <div className="flex flex-col xl:flex-row">
              <h2 className="font-bold text-6xl leading-normal xl:w-2/5 text-center xl:text-left">Le feu de bois, une chaleur douce.</h2>
              <div className="xl:max-w-96 xl:self-end">
                <p className="font-light text-sm text-primary-foreground">
                  Nos produits que nous vous proposons se distinguent par leur qualité, leur design unique, une consommation minimale et un rendement maximal en énergie renouvelable.
                </p>
                <Link className="block mt-4 underline font-medium text-center xl:text-left" href="/cheminees-et-poeles#products">
                  Découvrez nos produits
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] w-full mt-16 overflow-hidden">
              <Image src="/cheminees-2.jpg" alt="Cheminées" fill className="object-cover" />
              <p className="absolute bottom-0 text-4xl sm:text-7xl md:text-8xl lg:text-9xl -mb-2 sm:-mb-3 md:-mb-4 lg:-mb-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-primary">
                Fireplace Fusion
              </p>
            </div>
          </div>
        </section>
        <section className="px-8 bg-primary text-center lg:text-left">
          <div className="max-w-[1200px] mx-auto">
            <div className="py-16 flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <h3 className="text-5xl font-medium leading-snug text-secondary">Quelques mots sur notre travail.</h3>
                <div className="ml-[2px] h-24 w-[2px] bg-secondary hidden lg:block" />
                <div className="relative h-[230px] w-full lg:mt-48">
                  <Image src="/cheminees-3.webp" alt="Cheminées" fill className="object-cover" />
                </div>
              </div>
              <div className="flex gap-8 flex-col lg:mt-32 lg:w-1/2 items-center lg:items-start">
                <h4 className="text-2xl font-medium">La pose de cheminées et de poêles est au cœur de notre métier, car elle crée un foyer chaleureux et accueillant dans chaque maison.</h4>
                <p className="lg:max-w-[80%] text-left">
                  Chez Fireplace Fusion, nous croyons en l&apos;importance de créer des espaces qui apportent confort et bien-être.
                  <br />
                  C&apos;est pourquoi nous nous engageons à offrir des installations de qualité, réalisées par des professionnels expérimentés.
                  <br />
                  Nous réalisons les poses et les entretiens des appareils.
                </p>
                <div className="flex gap-4">
                  <TrendingUp className="text-secondary h-full w-16" />
                  <div>
                    <p className="text-4xl font-medium">1000+</p>
                    <p>Clients satisfait</p>
                  </div>
                  <div className="h-3/5 my-auto w-[1px] bg-secondary" />
                  <div>
                    <p className="text-4xl font-medium">100%</p>
                    <p>Ecologique</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-8 bg-white text-center lg:text-left">
          <div className="max-w-[1200px] mx-auto py-16">
            <h3 className="text-5xl font-medium leading-snug text-secondary">Nos produits</h3>
            <div className="ml-[2px] h-24 w-[2px] bg-secondary hidden lg:block" />
          </div>
        </section>
      </main>
      <Footer />
    </Slide>
  );
}
