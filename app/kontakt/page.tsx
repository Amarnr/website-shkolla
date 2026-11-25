
import Link from "next/link";

export default function Kontakt() {
  return (
    <main className="min-h-screen bg-[#222222] text-white">


      <header className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-16">
        <Link href="/" className="text-2xl font-black italic">
          AUTO SERVIC <span className="text-[#639FAB]">DAFI</span>
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-[#639FAB]">Home</Link>
          <Link href="/rreth-nesh" className="hover:text-[#639FAB]">Rreth Nesh</Link>
          <Link href="/galeria" className="hover:text-[#639FAB]">Galeria</Link>
          <Link href="/kontakt" className="text-[#639FAB]">Kontakt</Link>
        </nav>
      </header>


            <section className="px-6 py-20 md:px-16">
          <p className="mb-4 font-semibold text-1xl tracking-widest text-[#639FAB]">
            Na kontaktoni
          </p>

          <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            Shërbime profesionale për sistemet elektrike të automjeteve.
          </h1>


                    <p className="mt-4 max-w-2xl text-gray-400">
            Në Auto Servic Dafi, kujdesemi që automjeti juaj të marrë
            shërbimin e duhur, me diagnostikim të saktë dhe punë të besueshme.
          </p>

          <p className="mb-10 font-semibold text-1xl tracking-widest text-[#639FAB]">
            Informacionet tona
          </p>


                              <p className="mt-4 max-w-2xl text-gray-400">
Lokacioni: Gostivar, Maqedonia e Veriut

Telefoni: Na telefononi për më shumë informacione

Orari: Na kontaktoni për orarin e punës
          </p>

</section>



      </main>
  );
}