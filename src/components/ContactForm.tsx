"use client";

import { useState } from "react";
import { business, productCategories } from "@/lib/content";

type Status = "idle" | "sending" | "sent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    // No backend is wired up yet — compose a mailto so the enquiry is never
    // lost. Swap this for an API route / form service when one is available.
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const product = String(data.get("product") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Website enquiry — ${product || "General"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProduct of interest: ${product}\n\n${message}`,
    );

    setTimeout(() => {
      window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      form.reset();
    }, 400);
  }

  const field =
    "w-full rounded-xl border border-bark/15 bg-cream px-4 py-3 text-sm text-espresso placeholder:text-stone/70 outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-bark">
            Name
          </label>
          <input name="name" required className={field} placeholder="Your name" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-bark">
            Phone
          </label>
          <input
            name="phone"
            type="tel"
            className={field}
            placeholder="04xx xxx xxx"
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-bark">
          Email
        </label>
        <input
          name="email"
          type="email"
          required
          className={field}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-bark">
          Product of interest
        </label>
        <select name="product" className={field} defaultValue="">
          <option value="" disabled>
            Select a product…
          </option>
          {productCategories.map((c) => (
            <option key={c.slug} value={c.title}>
              {c.title}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-bark">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          className={`${field} resize-none`}
          placeholder="Tell us about your windows, rooms or project…"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-espresso px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-brass-dark disabled:opacity-60"
      >
        {status === "sending"
          ? "Opening your email…"
          : status === "sent"
            ? "Thank you — check your email app"
            : "Send enquiry"}
      </button>

      <p className="text-center text-xs text-stone">
        Prefer to talk? Call us on{" "}
        <a href={business.phoneHref} className="font-medium text-brass-dark">
          {business.phone}
        </a>
      </p>
    </form>
  );
}
