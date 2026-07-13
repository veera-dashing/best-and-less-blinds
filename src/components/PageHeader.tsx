import Link from "next/link";

export function PageHeader({
  eyebrow,
  title,
  intro,
  crumb,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-cream pt-32 pb-16 text-cocoa lg:pt-40 lg:pb-20">
      <div
        aria-hidden
        className="slat-pattern pointer-events-none absolute inset-0 opacity-30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(243,195,181,0.55), transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <nav className="flex items-center gap-2 text-xs text-cocoa/50">
          <Link href="/" className="hover:text-tomato-dark">
            Home
          </Link>
          <span>/</span>
          <span className="text-cocoa/80">{crumb}</span>
        </nav>
        <p className="eyebrow mt-6 text-tomato-dark">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight sm:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cocoa/70">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
