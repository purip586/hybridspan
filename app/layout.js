import { Noto_Sans_JP, Source_Sans_3 } from "next/font/google";
import { LanguageProvider } from "@/lib/language";
import "./globals.css";

const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
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
  icons: {
    icon: [{ url: "/logo.png", sizes: "512x512", type: "image/png" }],
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${jp.variable} m-0 bg-bg font-sans text-[20px] leading-[1.7] text-ink antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
