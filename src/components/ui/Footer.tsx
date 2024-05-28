export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-around">
      <div className="p-4 md:p-12 md:w-1/2 flex justify-center">
        <div className="w-fit">
          <h1 className="text-2xl font-bold">Fireplace Fusion</h1>
          <p className="text-sm">A demo app made with Next.js and PayloadCMS</p>
        </div>
      </div>
      <div className="p-4 md:p-12 md:w-1/2">
        Bienvenue chez Fireplace Fusion, votre destination ultime pour l&apos;intégration élégante de confort et de durabilité dans votre foyer. Spécialisés dans la vente de cheminées, poêles à bois,
        panneaux solaires et systèmes de climatisation, nous vous offrons des solutions énergétiques qui allient tradition, modernité et respect de l&apos;environnement.
      </div>
    </footer>
  );
}
