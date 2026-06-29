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
    <section
      className="border-b border-black/[0.07]"
      style={{ background: "rgba(255,255,255,0.65)", backdropFilter: "blur(8px)" }}
    >
      <div className="max-w-[1320px] mx-auto">
        {/* 3 cols on mobile, 6 on md+ */}
        <div className="grid grid-cols-3 md:grid-cols-6">
          {cats.map(({ emoji, label, href }, i) => (
            <Link
              key={href}
              href={href}
              className={`group flex flex-col items-center gap-2 py-5 sm:py-6 px-2 hover:bg-white/80 transition-all touch-manipulation min-h-[80px] ${i < cats.length - 1 ? "border-r border-black/[0.07]" : ""} ${i > 2 ? "border-t border-black/[0.07] md:border-t-0" : ""}`}
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white/80 group-hover:bg-[#CC1F1F]/10 flex items-center justify-center text-lg sm:text-xl transition-all group-hover:scale-110 shadow-sm flex-shrink-0">
                {emoji}
              </div>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-wide uppercase text-gray-500 group-hover:text-[#CC1F1F] transition-colors text-center leading-tight">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
