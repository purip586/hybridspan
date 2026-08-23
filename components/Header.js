"use client";

import { useLanguage } from "@/lib/language";

export function Header() {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/90 px-6 py-4 backdrop-blur-sm md:px-10">
      <div className="mx-auto flex max-w-[1040px] items-baseline justify-between gap-8 max-[720px]:flex-wrap">
        <a href="#home" className="font-serif text-[1.15rem] tracking-tight text-ink no-underline">
          HybridSpan
        </a>
        <div className="flex items-baseline gap-8 max-[720px]:w-full max-[720px]:justify-between">
          <nav
            aria-label="Primary"
            className="flex flex-wrap items-baseline gap-5 text-[0.88rem] text-muted md:gap-6"
          >
          <a className="text-muted no-underline hover:text-ink" href="#profile">
            {t.navProfile}
          </a>
          <a className="text-muted no-underline hover:text-ink" href="#services">
            {t.navServices}
          </a>
          <a className="text-muted no-underline hover:text-ink" href="#network">
            {t.navPartners}
          </a>
          <a className="text-muted no-underline hover:text-ink" href="#contact">
            {t.navContact}
          </a>
          </nav>
          <div className="flex items-baseline gap-1 font-serif text-[0.82rem] tracking-wide" role="group" aria-label="Language">
          <button
            type="button"
            aria-pressed={lang === "en"}
            onClick={() => setLang("en")}
            className={`cursor-pointer border-0 bg-transparent p-0 ${lang === "en" ? "text-ink" : "text-muted"}`}
          >
            EN
          </button>
          <span className="text-muted">/</span>
          <button
            type="button"
            aria-pressed={lang === "ja"}
            onClick={() => setLang("ja")}
            className={`cursor-pointer border-0 bg-transparent p-0 ${lang === "ja" ? "text-ink" : "text-muted"}`}
          >
            JA
          </button>
        </div>
        </div>
      </div>
    </header>
  );
}
