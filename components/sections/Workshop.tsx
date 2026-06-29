import Image from "next/image";
import Link from "next/link";

export default function Workshop() {
  return (
    <div>
      {/* Workshop panel */}
      <div className="relative overflow-hidden" style={{ height: "90vh", minHeight: 560 }}>
        <Image
          src="/images/showroom/parts-wall.jpg"
          alt="MNA Moto workshop and parts department"
          fill
          className="object-cover object-center"
          sizes="100vw"
          style={{ opacity: 0.55 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/40 mb-3">On-Site · Factory Trained</p>
          <h2 className="font-[family-name:var(--font-display)] text-white leading-none tracking-wider mb-2"
            style={{ fontSize: "clamp(52px, 10vw, 140px)" }}>
            WORKSHOP
          </h2>
          <p className="text-[14px] text-white/50 mb-8 font-light">Expert servicing. Zero shortcuts.</p>
          <div>
            <Link href="/workshop/book"
              className="inline-block px-10 py-3 border border-white text-white font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all">
              Explore Here
            </Link>
          </div>
        </div>
      </div>

      {/* Power Equipment panel */}
      <div className="relative overflow-hidden" style={{ height: "90vh", minHeight: 560 }}>
        <Image
          src="/images/showroom/power-equipment.jpg"
          alt="MNA Moto power equipment section"
          fill
          className="object-cover object-center"
          sizes="100vw"
          style={{ opacity: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/40 mb-3">Chainsaws · Mowers · Generators</p>
          <h2 className="font-[family-name:var(--font-display)] text-white leading-none tracking-wider mb-2"
            style={{ fontSize: "clamp(52px, 10vw, 140px)" }}>
            POWER<br />EQUIPMENT
          </h2>
          <p className="text-[14px] text-white/50 mb-8 font-light">Everything for work and outdoors</p>
          <div>
            <Link href="/outdoor-power"
              className="inline-block px-10 py-3 border border-white text-white font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all">
              Explore Here
            </Link>
          </div>
        </div>
      </div>

      {/* Finance panel */}
      <div className="relative overflow-hidden" style={{ height: "80vh", minHeight: 480 }}>
        <Image
          src="/images/bikes/cfmoto-atv-range.jpg"
          alt="CFMOTO ATV finance"
          fill
          className="object-cover object-center"
          sizes="100vw"
          style={{ opacity: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/40 mb-3">Fast Approval · Flexible Terms</p>
          <h2 className="font-[family-name:var(--font-display)] text-white leading-none tracking-wider mb-2"
            style={{ fontSize: "clamp(52px, 10vw, 140px)" }}>
            FINANCE
          </h2>
          <p className="text-[14px] text-white/50 mb-8 font-light">Ride now. Pay smart.</p>
          <div>
            <Link href="/finance"
              className="inline-block px-10 py-3 border border-white text-white font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all">
              Explore Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
