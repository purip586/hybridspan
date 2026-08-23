"use client";

import { ContactForm } from "./ContactForm";
import { Header } from "./Header";
import { useLanguage } from "@/lib/language";

const card = "rounded-[14px] border border-line bg-panel p-[18px]";

export function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <a
        href="#main"
        className="absolute left-[-999px] focus:left-3 focus:top-3 focus:z-20 focus:bg-white focus:px-2 focus:py-2 focus:text-black"
      >
        {t.skip}
      </a>
      <Header />
      <main id="main" className="mx-auto max-w-[980px] px-6 pb-20 pt-12">
        <section id="home">
          <p className="tracking-wide text-accent-2">{t.eyebrow}</p>
          <h1 className="my-3 text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.2]">{t.heroTitle}</h1>
          <p className="max-w-[46rem] text-[1.15rem] text-muted">{t.heroLead}</p>
          <p className="tracking-wide text-accent-2">{t.tagline}</p>
          <div className={`my-7 flex max-w-[40rem] gap-4 ${card}`}>
            <img src="/logo.svg" alt="" width={48} height={48} />
            <div>
              <p className="m-0 font-bold">Pradip Puri</p>
              <p className="my-1 text-accent-2">{t.role}</p>
              <p className="m-0 text-[0.92rem] text-muted">{t.spec}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#profile"
              className="inline-block rounded-full bg-accent px-5 py-3 font-semibold text-white no-underline"
            >
              {t.ctaAbout}
            </a>
            <a
              href="#contact"
              className="inline-block rounded-full border border-line bg-transparent px-5 py-3 font-semibold text-ink no-underline"
            >
              {t.ctaContact}
            </a>
          </div>
        </section>

        <section id="profile" className="mt-[72px]">
          <h2 className="text-[1.6rem]">{t.profileTitle}</h2>
          <article className={`${card} p-7`}>
            <header className="mb-2 flex items-start gap-4">
              <img src="/logo.svg" alt="" width={56} height={56} />
              <div>
                <h3 className="mb-1 mt-0">Pradip Puri</h3>
                <p className="my-1 text-accent-2">{t.profileRole}</p>
                <p className="m-0 text-[0.92rem] text-muted">{t.profileLocation}</p>
              </div>
            </header>

            <p className="font-semibold text-accent-2">{t.profileHeadline}</p>
            <p>{t.profileP1}</p>
            <p>{t.profileP2}</p>

            <h4 className="mb-2.5 mt-7 text-[1.05rem]">{t.positionTitle}</h4>
            <ol className="m-0 list-decimal pl-[1.2rem] text-muted">
              {t.positions.map((item) => (
                <li key={item} className="my-1.5">
                  {item}
                </li>
              ))}
            </ol>

            <h4 className="mb-2.5 mt-7 text-[1.05rem]">{t.expertiseTitle}</h4>
            <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 p-0">
              {t.expertise.map((item) => (
                <li key={item.title} className={card}>
                  <h3 className="mt-0 text-[1.05rem]">{item.title}</h3>
                  <p className="mb-0 text-muted">{item.body}</p>
                </li>
              ))}
            </ul>

            <h4 className="mb-2.5 mt-7 text-[1.05rem]">{t.experienceTitle}</h4>
            <ul className="m-0 grid list-none gap-4 p-0">
              {t.jobs.map((job) => (
                <li key={job.title}>
                  <h3 className="mb-1 mt-0 text-[1.02rem]">{job.title}</h3>
                  <p className="m-0 text-[0.92rem] text-muted">{job.dates}</p>
                  <p>{job.body}</p>
                </li>
              ))}
            </ul>

            <h4 className="mb-2.5 mt-7 text-[1.05rem]">{t.certsTitle}</h4>
            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
              {t.certs.map((cert) => (
                <li
                  key={cert}
                  className="rounded-full border border-line px-3 py-1.5 text-[0.88rem] text-muted"
                >
                  {cert}
                </li>
              ))}
            </ul>

            <h4 className="mb-2.5 mt-7 text-[1.05rem]">{t.educationTitle}</h4>
            <ul className="m-0 grid list-none gap-4 p-0">
              {t.education.map((edu) => (
                <li key={edu.title}>
                  <h3 className="mb-1 mt-0 text-[1.02rem]">{edu.title}</h3>
                  <p className="m-0 text-[0.92rem] text-muted">{edu.dates}</p>
                </li>
              ))}
            </ul>

            <p className="mt-[22px] text-[0.92rem] text-muted">{t.languages}</p>
            <p>
              <a href="https://www.linkedin.com/in/puripradip" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </p>
          </article>
        </section>

        <section id="services" className="mt-[72px]">
          <h2 className="text-[1.6rem]">{t.servicesTitle}</h2>
          <p className="max-w-[46rem] text-muted">{t.servicesIntro}</p>
          <ul className="m-0 grid list-none grid-cols-3 grid-rows-2 items-stretch gap-4 p-0 max-[900px]:grid-cols-2 max-[900px]:grid-rows-none max-[720px]:grid-cols-1">
            {t.services.map((service) => (
              <li key={service.title} className={`flex min-h-0 flex-col ${card}`}>
                <h3 className="mt-0 min-h-[2.6em] text-[1.05rem] leading-[1.3] max-[720px]:min-h-0">
                  {service.title}
                </h3>
                <p className="mb-0 flex-1 text-muted">{service.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="network" className="mt-[72px]">
          <h2 className="text-[1.6rem]">{t.partnersTitle}</h2>
          <p className="max-w-[46rem] text-muted">{t.partnersIntro}</p>
          <ul className="m-0 grid list-none gap-3 p-0">
            {t.partners.map((partner) => (
              <li
                key={partner.region}
                className="flex flex-col gap-1 border-l-[3px] border-accent bg-panel px-[18px] py-4"
              >
                <strong>{partner.region}</strong>
                <span className="text-muted">{partner.detail}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="mt-[72px]">
          <h2 className="text-[1.6rem]">{t.contactTitle}</h2>
          <p className="max-w-[46rem] text-muted">{t.contactIntro}</p>
          <ContactForm />
        </section>
      </main>
      <footer className="mx-auto max-w-[980px] border-t border-line px-6 pb-12 pt-7 text-[0.85rem] text-muted">
        <p>{t.footer}</p>
      </footer>
    </>
  );
}
