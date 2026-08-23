"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language";

const endpoint = "https://formsubmit.co/ajax/" + ["hello", "hybridspan.io"].join("@");

export function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("website")) {
      setStatus(t.sent);
      form.reset();
      return;
    }

    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      company: String(data.get("company") || "").trim(),
      message: String(data.get("message") || "").trim(),
      _subject: "HybridSpan website enquiry",
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus(t.invalid);
      return;
    }

    setStatus(t.sending);
    setSending(true);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("send failed");
      setStatus(t.sent);
      form.reset();
    } catch {
      setStatus(t.error);
    } finally {
      setSending(false);
    }
  }

  const field =
    "mb-2.5 rounded-[10px] border border-line bg-panel px-3 py-2.5 font-sans text-ink placeholder:text-muted/70";

  return (
    <form className="mt-6 grid max-w-[36rem] gap-2" noValidate onSubmit={onSubmit}>
      <label className="text-[0.92rem]" htmlFor="contact-name">
        {t.labelName}
      </label>
      <input
        id="contact-name"
        name="name"
        type="text"
        autoComplete="name"
        required
        placeholder={t.phName}
        className={field}
      />

      <label className="text-[0.92rem]" htmlFor="contact-email">
        {t.labelEmail}
      </label>
      <input
        id="contact-email"
        name="email"
        type="email"
        autoComplete="email"
        required
        placeholder={t.phEmail}
        className={field}
      />

      <label className="text-[0.92rem]" htmlFor="contact-company">
        {t.labelCompany}
      </label>
      <input
        id="contact-company"
        name="company"
        type="text"
        autoComplete="organization"
        placeholder={t.phCompany}
        className={field}
      />

      <label className="text-[0.92rem]" htmlFor="contact-message">
        {t.labelMessage}
      </label>
      <textarea
        id="contact-message"
        name="message"
        rows={6}
        required
        placeholder={t.phMessage}
        className={field}
      />

      <p className="absolute -left-[9999px] h-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </p>

      <button
        type="submit"
        disabled={sending}
        className="justify-self-start rounded-full border-0 bg-accent px-5 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending ? t.sending : t.send}
      </button>
      <p className="min-h-[1.4em] text-[0.9rem] text-muted" role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
