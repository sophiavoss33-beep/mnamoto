import Image from "next/image";
import Link from "next/link";

export default function GearSection() {
  return (
    <>
      {/* MX Apparel panel */}
      <div className="relative overflow-hidden" style={{ height: "90vh", minHeight: 560 }}>
        <Image
          src="/images/gear/thor-jerseys.jpg"
          alt="Thor MX jerseys and apparel"
          fill
          className="object-cover object-center"
          sizes="100vw"
          style={{ opacity: 0.65 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />
        <div className="absolute right-5 top-1/2 -translate-y-1/2 hidden lg:block">
          <span className="text-[9px] font-semibold tracking-[0.25em] uppercase text-white/25" style={{ writingMode: "vertical-rl" }}>
            Thor · Fox · RHK · In Store Now
          </span>
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/40 mb-3">Thor · Fox · RHK</p>
          <h2 className="font-[family-name:var(--font-display)] text-white leading-none tracking-wider mb-2"
            style={{ fontSize: "clamp(52px, 10vw, 140px)" }}>
            MX APPAREL
          </h2>
          <p className="text-[14px] text-white/50 mb-8 font-light">Shop all things Moto</p>
          <div>
            <Link href="/parts/apparel"
              className="inline-block px-10 py-3 border border-white text-white font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all">
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Storefront — Visit us */}
      <div className="relative overflow-hidden" style={{ height: "70vh", minHeight: 420 }}>
        <Image
          src="/images/store/storefront.jpg"
          alt="MNA Moto Supplies storefront Hamilton Victoria"
          fill
          className="object-cover object-center"
          sizes="100vw"
          style={{ opacity: 0.55 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/40 mb-3">Hamilton · Victoria</p>
          <h2 className="font-[family-name:var(--font-display)] text-white leading-none tracking-wider mb-2"
            style={{ fontSize: "clamp(44px, 8vw, 110px)" }}>
            VISIT US<br />IN STORE.
          </h2>
          <p className="text-[14px] text-white/50 mb-8 font-light">Mon–Fri 8:30–5:00 · Sat 8:30–4:00</p>
          <div>
            <Link href="/contact"
              className="inline-block px-10 py-3 border border-white text-white font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all">
              Get Directions
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
