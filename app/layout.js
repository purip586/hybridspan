import { Noto_Sans_JP, Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { LanguageProvider } from "@/lib/language";
import "./globals.css";

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jp = Noto_Sans_JP({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-jp",
  display: "swap",
});

export const metadata = {
  title: "HybridSpan — Enterprise Cloud Transformation & Security Solutions",
  description:
    "Secure multi-cloud and hybrid-cloud transformation for enterprises. Led by Pradip Puri, Founder & Cloud Solutions Architect.",
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${serif.variable} ${jp.variable} m-0 bg-bg font-sans text-[17px] leading-[1.65] text-ink antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
