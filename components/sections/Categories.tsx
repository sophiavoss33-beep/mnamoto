import Link from "next/link";

const cats = [
  { emoji: "🏍", label: "New Bikes", href: "/motorcycles/new" },
  { emoji: "🔍", label: "Used Bikes", href: "/motorcycles/used" },
  { emoji: "🚜", label: "ATVs & UTVs", href: "/motorcycles/atv" },
  { emoji: "🔧", label: "Book Service", href: "/workshop/book" },
  { emoji: "🛡", label: "Parts & Gear", href: "/parts" },
  { emoji: "💳", label: "Finance", href: "/finance" },
];

export default function Categories() {
  return (
    <section className="border-b border-black/[0.07]" style={{ background: "rgba(255,255,255,0.6)", backdropFilter: "blur(8px)" }}>
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-6">
          {cats.map(({ emoji, label, href }, i) => (
            <Link key={href} href={href}
              className={`group flex flex-col items-center gap-2.5 py-6 px-3 hover:bg-white/80 transition-all ${i < cats.length - 1 ? "border-r border-black/[0.07]" : ""}`}>
              <div className="w-11 h-11 rounded-2xl bg-white/80 group-hover:bg-[#CC1F1F]/10 flex items-center justify-center text-xl transition-all group-hover:scale-110 shadow-sm">
                {emoji}
              </div>
              <span className="text-[10px] font-bold tracking-wide uppercase text-gray-500 group-hover:text-[#CC1F1F] transition-colors">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
