
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#222222] text-white">

      <header className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-16">
        <Link href="/" className="text-2xl font-black italic">
          AUTO SERVIC <span className="text-[#639FAB]">DAFI</span>
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-[#639FAB]">
            Home
          </Link>
          <Link href="/rreth-nesh" className="hover:text-[#639FAB]">
            Rreth Nesh
          </Link>
          <Link href="/galeria" className="hover:text-[#639FAB]">
            Galeria
          </Link>
          <Link href="/kontakt" className="hover:text-[#639FAB]">
            Kontakt
          </Link>
        </nav>
      </header>

      <section className="relative flex min-h-[550px] items-center overflow-hidden">

        <img
          src="/images/auto-servic-dafi.png"
          alt="Auto Servic Dafi workshop"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#222222]/65" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:px-16">

          <p className="mb-4 font-semibold tracking-widest text-[#639FAB]">
            AUTO SERVIC DAFI · GOSTIVAR
          </p>

          <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            Shërbime profesionale për sistemet elektrike të automjeteve.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Diagnostikim, riparim dhe mirëmbajtje me kujdes dhe profesionalizëm.
          </p>

          <Link
            href="/kontakt"
            className="mt-8 inline-block rounded-md bg-[#639FAB] px-7 py-4 font-bold text-white hover:bg-[#1C5D99]"
          >
            Na Kontaktoni
          </Link>

        </div>
      </section>

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

      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">

          <h2 className="text-3xl font-bold">
            Rreth Auto Servic Dafi
          </h2>


<p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
  Auto Servic Dafi ofron shërbime profesionale për sistemet
  elektrike të automjeteve në Gostivar.
  <span className="mt-3 block text-gray-400">
    Me përkushtim ndaj cilësisë dhe kujdesit, synojmë të ofrojmë
    zgjidhje të besueshme për çdo klient.
  </span>
</p>


          <Link
            href="/rreth-nesh"
className="mt-8 inline-block rounded-md bg-[#639FAB] px-7 py-4 font-bold text-white hover:bg-[#1C5D99]"
          >
            Më Shumë Rreth Nesh →
          </Link>

        </div>
      </section>

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


<footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
  © 2026 Auto Servic Dafi · Gostivar
</footer>

    </main>
  );
}
