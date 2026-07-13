"use client";

import { useState } from "react";
import { business, productCategories } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      product: String(data.get("product") || ""),
      message: String(data.get("message") || ""),
      company: String(data.get("company") || ""), // honeypot
    };

    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Something went wrong. Please try again.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-tomato/30 bg-cocoa p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-tomato/15 text-tomato">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-4 font-serif text-2xl text-cream">
          Thank you — enquiry sent
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-oat">
          We&rsquo;ve received your message and will get back to you, usually
          within one business day. Prefer to talk now? Call{" "}
          <a href={business.phoneHref} className="font-medium text-tomato">
            {business.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-oat/15 bg-cocoa px-4 py-3 text-sm text-cream placeholder:text-taupe/70 outline-none transition focus:border-tomato focus:ring-2 focus:ring-tomato/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot — hidden from people, tempting to bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-oat">
            Name
          </label>
          <input name="name" required className={field} placeholder="Your name" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-oat">
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
        <label className="mb-1.5 block text-sm font-medium text-oat">
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
        <label className="mb-1.5 block text-sm font-medium text-oat">
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
        <label className="mb-1.5 block text-sm font-medium text-oat">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          className={`${field} resize-none`}
          placeholder="Tell us about your windows, rooms or project…"
        />
      </div>

      {status === "error" && (
        <p className="rounded-xl border border-blush/30 bg-blush/10 px-4 py-3 text-sm text-blush">
          {errorMsg}{" "}
          <a href={business.phoneHref} className="font-semibold underline">
            Call {business.phone}
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-tomato px-6 py-3.5 text-sm font-semibold text-cocoa-deep transition-colors hover:bg-blush disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>

      <p className="text-center text-xs text-taupe">
        Prefer to talk? Call us on{" "}
        <a href={business.phoneHref} className="font-medium text-tomato">
          {business.phone}
        </a>
      </p>
    </form>
  );
}
