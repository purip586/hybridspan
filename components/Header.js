"use client";

import { useLanguage } from "@/lib/language";

export function Header() {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="sticky top-0 z-10 flex items-center gap-6 border-b border-line bg-bg/92 px-7 py-4 backdrop-blur-md max-[720px]:flex-wrap">
      <a href="#home" className="flex items-center gap-2.5 font-bold tracking-wide text-ink no-underline">
        <img src="/logo.svg" alt="" width={36} height={36} />
        HybridSpan
      </a>
      <nav aria-label="Primary" className="flex flex-1 gap-[18px] max-[720px]:order-3 max-[720px]:w-full max-[720px]:flex-wrap">
        <a className="text-[0.95rem] text-muted no-underline hover:text-ink" href="#profile">
          {t.navProfile}
        </a>
        <a className="text-[0.95rem] text-muted no-underline hover:text-ink" href="#services">
          {t.navServices}
        </a>
        <a className="text-[0.95rem] text-muted no-underline hover:text-ink" href="#network">
          {t.navPartners}
        </a>
        <a className="text-[0.95rem] text-muted no-underline hover:text-ink" href="#contact">
          {t.navContact}
        </a>
      </nav>
      <div className="flex gap-1.5" role="group" aria-label="Language">
        <button
          type="button"
          aria-pressed={lang === "en"}
          onClick={() => setLang("en")}
          className={`cursor-pointer rounded-full border px-2.5 py-1 ${
            lang === "en"
              ? "border-accent-2 bg-accent-2 text-bg"
              : "border-line bg-transparent text-muted"
          }`}
        >
          EN
        </button>
        <button
          type="button"
          aria-pressed={lang === "ja"}
          onClick={() => setLang("ja")}
          className={`cursor-pointer rounded-full border px-2.5 py-1 ${
            lang === "ja"
              ? "border-accent-2 bg-accent-2 text-bg"
              : "border-line bg-transparent text-muted"
          }`}
        >
          JA
        </button>
      </div>
    </header>
  );
}
