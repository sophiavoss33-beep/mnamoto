import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mnamoto.com.au"),
  title: {
    default: "MNA Moto | Victoria's Premier Motorcycle & Power Equipment Dealer",
    template: "%s | MNA Moto",
  },
  description:
    "MNA Moto — authorised dealer for KTM, Husqvarna, GASGAS, CFMOTO, YCF and Sunday. New & used motorcycles, ATVs, chainsaws, lawnmowers, brushcutters, parts and accessories. Expert on-site workshop.",
  keywords: ["motorcycle dealer Victoria","KTM dealer","GASGAS dealer","CFMOTO ATV","Husqvarna motorcycles","YCF pit bikes","Sunday bikes","chainsaw dealer","lawnmower dealer","motorcycle service","MNA Moto"],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://mnamoto.com.au",
    siteName: "MNA Moto",
    title: "MNA Moto | Victoria's Premier Motorcycle & Power Equipment Dealer",
    description: "New & used motorcycles, ATVs, outdoor power equipment, expert workshop servicing and a fully stocked parts & accessories store.",
    images: [{ url: "/images/store/storefront.jpg", width: 1200, height: 630, alt: "MNA Moto Dealership" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MNA Moto | Victoria's Premier Motorcycle Dealer",
    description: "New & used motorcycles, ATVs, outdoor power equipment and expert workshop.",
    images: ["/images/store/storefront.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-[#1a1a1a]">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MotorcycleDealer",
              name: "MNA Moto",
              url: "https://mnamoto.com.au",
              description: "Victoria's premier motorcycle and outdoor power equipment dealer. Authorised for KTM, Husqvarna, GASGAS, CFMOTO, YCF and Sunday.",
              address: { "@type": "PostalAddress", addressRegion: "VIC", addressCountry: "AU" },
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:30", closes: "17:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:30", closes: "16:00" },
              ],
              aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200" },
            }),
          }}
        />
      </body>
    </html>
  );
}
