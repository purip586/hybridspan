import { LanguageProvider } from "@/lib/language";
import "./globals.css";

export const metadata = {
  title: "HybridSpan — Enterprise Cloud Transformation & Technology Solutions",
  description:
    "Secure multi-cloud and hybrid-cloud transformation for enterprises. Led by Pradip Puri, Founder & Cloud Solutions Architect.",
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-0 bg-bg font-sans leading-[1.55] text-ink antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
