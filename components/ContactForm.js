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
    "mb-6 w-full rounded-none border-0 border-b border-line bg-transparent px-0 py-2.5 text-[1rem] text-ink outline-none placeholder:text-muted/60 focus:border-accent";

  return (
    <form className="relative mt-10 max-w-[32rem]" noValidate onSubmit={onSubmit}>
      <label className="mb-1 block text-[0.8rem] text-muted" htmlFor="contact-name">
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

      <label className="mb-1 block text-[0.8rem] text-muted" htmlFor="contact-email">
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

      <label className="mb-1 block text-[0.8rem] text-muted" htmlFor="contact-company">
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

      <label className="mb-1 block text-[0.8rem] text-muted" htmlFor="contact-message">
        {t.labelMessage}
      </label>
      <textarea
        id="contact-message"
        name="message"
        rows={5}
        required
        placeholder={t.phMessage}
        className={`${field} resize-y`}
      />

      <p className="absolute -left-[9999px] h-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </p>

      <button
        type="submit"
        disabled={sending}
        className="mt-2 cursor-pointer border-0 border-b border-accent bg-transparent px-0 py-1 font-serif text-[1.05rem] text-ink disabled:cursor-not-allowed disabled:opacity-50"
      >
        {sending ? t.sending : t.send}
      </button>
      <p className="min-h-[1.4em] text-[0.88rem] text-muted" role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
