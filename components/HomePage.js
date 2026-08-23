"use client";

import { ContactForm } from "./ContactForm";
import { Header } from "./Header";
import { useLanguage } from "@/lib/language";

function SectionLabel({ children }) {
  return (
    <p className="mb-3 font-sans text-[0.9rem] font-medium tracking-[0.1em] text-muted">{children}</p>
  );
}

export function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <a
        href="#main"
        className="absolute left-[-999px] focus:left-3 focus:top-3 focus:z-20 focus:bg-ink focus:px-2 focus:py-2 focus:text-bg"
      >
        {t.skip}
      </a>
      <Header />
      <main id="main" className="mx-auto max-w-[1040px] px-6 pb-24 pt-16 md:px-10">
        <section id="home" className="grid gap-12 border-b border-line pb-16 md:grid-cols-[1.35fr_0.9fr] md:gap-16 md:pb-20">
          <div>
            <SectionLabel>{t.eyebrow}</SectionLabel>
            <h1 className="mt-0 mb-6 font-serif text-[clamp(2.5rem,5vw,3.75rem)] font-normal leading-[1.18] tracking-[-0.02em]">
              {t.heroTitle}
            </h1>
            <p className="m-0 max-w-[40rem] text-[1.2rem] text-muted">{t.heroLead}</p>
            <p className="mt-4 mb-0 max-w-[40rem] text-[1.1rem] text-accent-2">{t.tagline}</p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3">
              <a href="#profile" className="text-[1.1rem] text-ink no-underline underline decoration-accent decoration-1 underline-offset-[6px]">
                {t.ctaAbout}
              </a>
              <a href="#contact" className="text-[1.1rem] text-muted no-underline hover:text-ink">
                {t.ctaContact}
              </a>
            </div>
          </div>
          <aside className="self-end border-t border-line pt-6 md:border-t-0 md:border-l md:pl-10 md:pt-0">
            <p className="m-0 font-serif text-[1.7rem] leading-tight">Pradip Puri</p>
            <p className="mt-2 mb-0 text-[1.1rem] text-accent-2">{t.role}</p>
            <p className="mt-3 mb-0 text-[1.05rem] leading-relaxed text-muted">{t.spec}</p>
          </aside>
        </section>

        <section id="profile" className="mt-20 grid gap-10 md:grid-cols-[9rem_1fr] md:gap-14">
          <SectionLabel>{t.profileTitle}</SectionLabel>
          <article>
            <p className="mt-0 font-serif text-[1.5rem] leading-snug">{t.profileHeadline}</p>
            <p className="text-muted">{t.profileP1}</p>
            <p className="text-muted">{t.profileP2}</p>

            <h3 className="mb-4 mt-12 font-serif text-[1.4rem] font-normal">{t.positionTitle}</h3>
            <ol className="m-0 list-none border-t border-line p-0">
              {t.positions.map((item, i) => (
                <li key={item} className="flex gap-6 border-b border-line py-3.5 text-[1.1rem]">
                  <span className="w-7 shrink-0 text-muted">0{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>

            <h3 className="mb-4 mt-12 font-serif text-[1.4rem] font-normal">{t.expertiseTitle}</h3>
            <dl className="m-0 grid gap-8 p-0 sm:grid-cols-2">
              {t.expertise.map((item) => (
                <div key={item.title}>
                  <dt className="font-medium text-[1.1rem]">{item.title}</dt>
                  <dd className="m-0 mt-2 text-[1.05rem] text-muted">{item.body}</dd>
                </div>
              ))}
            </dl>

            <h3 className="mb-4 mt-12 font-serif text-[1.4rem] font-normal">{t.experienceTitle}</h3>
            <ul className="m-0 list-none p-0">
              {t.jobs.map((job) => (
                <li key={job.title} className="mb-8 last:mb-0">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h4 className="m-0 text-[1.15rem] font-medium">{job.title}</h4>
                    <p className="m-0 shrink-0 text-[1rem] text-muted">{job.dates}</p>
                  </div>
                  <p className="mb-0 mt-2 text-[1.05rem] text-muted">{job.body}</p>
                </li>
              ))}
            </ul>

            <h3 className="mb-4 mt-12 font-serif text-[1.4rem] font-normal">{t.certsTitle}</h3>
            <ul className="m-0 list-none p-0 text-[1.05rem]">
              {t.certs.map((cert) => (
                <li key={cert} className="border-b border-line py-2.5 text-muted last:border-b-0">
                  {cert}
                </li>
              ))}
            </ul>

            <h3 className="mb-4 mt-12 font-serif text-[1.4rem] font-normal">{t.educationTitle}</h3>
            <ul className="m-0 list-none p-0">
              {t.education.map((edu) => (
                <li key={edu.title} className="mb-4">
                  <h4 className="m-0 text-[1.15rem] font-medium">{edu.title}</h4>
                  <p className="m-0 mt-1 text-[1rem] text-muted">{edu.dates}</p>
                </li>
              ))}
            </ul>

            <p className="mb-0 mt-8">
              <a href="https://www.linkedin.com/in/puripradip" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </p>
          </article>
        </section>

        <section id="services" className="mt-20 grid gap-10 border-t border-line pt-20 md:grid-cols-[9rem_1fr] md:gap-14">
          <SectionLabel>{t.servicesTitle}</SectionLabel>
          <div>
            <p className="mt-0 max-w-[42rem] text-muted">{t.servicesIntro}</p>
            <ol className="m-0 mt-10 list-none p-0">
              {t.services.map((service, i) => (
                <li
                  key={service.title}
                  className="grid gap-2 border-t border-line py-7 last:border-b last:border-line sm:grid-cols-[2.4rem_minmax(0,16rem)_1fr] sm:gap-8 sm:py-8"
                >
                  <span className="font-serif text-muted">0{i + 1}</span>
                  <h3 className="m-0 font-serif text-[1.4rem] font-normal leading-snug">{service.title}</h3>
                  <p className="m-0 text-[1.1rem] text-muted">{service.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="network" className="mt-20 grid gap-10 border-t border-line pt-20 md:grid-cols-[9rem_1fr] md:gap-14">
          <SectionLabel>{t.partnersTitle}</SectionLabel>
          <div>
            <p className="mt-0 max-w-[40rem] text-muted">{t.partnersIntro}</p>
            <ul className="m-0 mt-8 list-none p-0">
              {t.partners.map((partner) => (
                <li key={partner.region} className="grid gap-1 border-t border-line py-5 sm:grid-cols-[14rem_1fr] sm:gap-8">
                  <strong className="font-medium">{partner.region}</strong>
                  <span className="text-muted">{partner.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="mt-20 grid gap-10 border-t border-line pt-20 md:grid-cols-[9rem_1fr] md:gap-14">
          <SectionLabel>{t.contactTitle}</SectionLabel>
          <div>
            <p className="mt-0 max-w-[40rem] text-muted">{t.contactIntro}</p>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer className="mx-auto max-w-[1040px] border-t border-line px-6 py-10 text-[1rem] leading-relaxed text-muted md:px-10">
        <p className="m-0 max-w-[46rem]">{t.footer}</p>
      </footer>
    </>
  );
}
