import Link from "next/link";

export default function RrethNesh() {
  return (
    <main className="min-h-screen bg-[#222222] text-white">

      <header className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-16">
        <Link href="/" className="text-2xl font-black italic">
          AUTO SERVIC <span className="text-[#639FAB]">DAFI</span>
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-[#639FAB]">Home</Link>
          <Link href="/rreth-nesh" className="text-[#639FAB]">Rreth Nesh</Link>
          <Link href="/galeria" className="hover:text-[#639FAB]">Galeria</Link>
          <Link href="/kontakt" className="hover:text-[#639FAB]">Kontakt</Link>
        </nav>
      </header>

      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 font-semibold tracking-widest text-[#639FAB]">
              NJIHUNI ME NE
            </p>

            <h1 className="text-4xl font-black md:text-5xl">
              Rreth Auto Servic Dafi
            </h1>

            <p className="mt-6 leading-8 text-gray-400">
              Auto Servic Dafi është një servis i specializuar në
              sistemet elektrike të automjeteve, i vendosur në Gostivar.
              Ne punojmë me përkushtim për të identifikuar dhe zgjidhur
              problemet që ndikojnë në funksionimin e automjetit tuaj.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              Ofrojmë diagnostikim, kontroll dhe riparim të pjesëve
              elektrike, duke u kujdesur që çdo punë të kryhet me
              profesionalizëm dhe vëmendje ndaj detajeve.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              Qëllimi ynë është të ofrojmë shërbim të besueshëm,
              komunikim të qartë dhe zgjidhje praktike për çdo klient.
            </p>

            <Link
              href="/kontakt"
              className="mt-8 inline-block rounded-md bg-[#639FAB] px-7 py-3 font-bold hover:bg-[#1C5D99]"
            >
              Na Kontaktoni
            </Link>
          </div>

          <div>
            <img
              src="/images/diagnostikim.jpg"
              alt="Auto Servic Dafi"
              className="w-full rounded-xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#292929] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold">
            Puna dhe përkushtimi ynë
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-gray-400">
            Çdo automjet kërkon kontroll të kujdesshëm dhe diagnostikim
            të saktë. Ne përpiqemi të gjejmë shkakun e problemit dhe të
            ofrojmë zgjidhjen e duhur, duke i kushtuar rëndësi cilësisë
            së punës dhe kënaqësisë së klientit.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-white/10 p-6">
              <h3 className="text-xl font-bold text-[#639FAB]">
                Përkushtim
              </h3>
              <p className="mt-3 text-gray-400">
                Vëmendje dhe kujdes gjatë çdo shërbimi.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 p-6">
              <h3 className="text-xl font-bold text-[#639FAB]">
                Profesionalizëm
              </h3>
              <p className="mt-3 text-gray-400">
                Punë e organizuar dhe kontroll i kujdesshëm.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 p-6">
              <h3 className="text-xl font-bold text-[#639FAB]">
                Besueshmëri
              </h3>
              <p className="mt-3 text-gray-400">
                Komunikim i qartë dhe shërbim i përgjegjshëm.
              </p>
            </div>
          </div>
        </div>
      </section>

<footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
  © 2026 Auto Servic Dafi · Gostivar
</footer>

    </main>
  );
}
