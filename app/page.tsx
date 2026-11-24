
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#222222] text-white">

      {/* NAVBAR */}
      <header className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-16">
        <Link href="/" className="text-2xl font-black italic">
          AUTO SERVIC <span className="text-[#639FAB]">DAFI</span>
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-[#639FAB]">Home</Link>
          <Link href="/rreth-nesh" className="hover:text-[#639FAB]">Rreth Nesh</Link>
          <Link href="/galeria" className="hover:text-[#639FAB]">Galeria</Link>
          <Link href="/kontakt" className="hover:text-[#639FAB]">Kontakt</Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 font-semibold tracking-widest text-[#639FAB]">
              AUTO SERVIC DAFI · GOSTIVAR
            </p>

            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Shërbime profesionale për sistemet elektrike të automjeteve.
            </h1>

            <p className="mt-6 text-lg text-gray-400">
              Diagnostikim, riparim dhe mirëmbajtje me kujdes dhe profesionalizëm.
            </p>

            <Link
              href="/kontakt"
              className="mt-8 inline-block rounded-md bg-[#639FAB] px-7 py-4 font-bold text-white hover:bg-[#1C5D99]"
            >
              Na Kontaktoni
            </Link>
          </div>

          <div>
            <img
              src="/images/auto-servic-dafi.png"
              alt="Auto Servic Dafi"
              className="w-full rounded-xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#292929] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold">
            Pse të na zgjidhni?
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            Në Auto Servic Dafi, kujdesemi që automjeti juaj të marrë
            shërbimin e duhur, me diagnostikim të saktë dhe punë të besueshme.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-white/10 p-6">
              <h3 className="text-xl font-bold text-[#639FAB]">
                Diagnostikim
              </h3>
              <p className="mt-3 text-gray-400">
                Kontroll dhe identifikim i problemeve elektrike.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 p-6">
              <h3 className="text-xl font-bold text-[#639FAB]">
                Riparime
              </h3>
              <p className="mt-3 text-gray-400">
                Riparim i sistemeve elektrike të automjeteve.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 p-6">
              <h3 className="text-xl font-bold text-[#639FAB]">
                Mirëmbajtje
              </h3>
              <p className="mt-3 text-gray-400">
                Kontroll dhe kujdes për funksionimin e automjetit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold">
            Rreth Auto Servic Dafi
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-gray-400">
            Auto Servic Dafi ofron shërbime për sistemet elektrike të
            automjeteve në Gostivar. Synimi ynë është të ofrojmë punë cilësore,
            shërbim të kujdesshëm dhe zgjidhje për nevojat e klientëve.
          </p>

          <Link
            href="/rreth-nesh"
            className="mt-6 inline-block text-[#639FAB] hover:underline"
          >
            Më shumë rreth nesh →
          </Link>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-[#292929] px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">
          Keni nevojë për ndihmë?
        </h2>

        <p className="mt-4 text-gray-400">
          Na kontaktoni për më shumë informacione rreth shërbimeve tona.
        </p>

        <Link
          href="/kontakt"
          className="mt-7 inline-block rounded-md bg-[#639FAB] px-7 py-3 font-bold hover:bg-[#1C5D99]"
        >
          Na Kontaktoni
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Auto Servic Dafi · Gostivar
      </footer>

    </main>
  );
}
