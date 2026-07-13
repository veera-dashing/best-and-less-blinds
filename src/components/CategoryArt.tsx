// Lightweight CSS/SVG art representing each product category — keeps the
// site self-contained and fast while evoking the real product.

export function CategoryArt({ slug }: { slug: string }) {
  const base =
    "h-full w-full transition-transform duration-700 group-hover:scale-[1.04]";

  switch (slug) {
    case "shutters":
      return (
        <div className={`${base} flex flex-col gap-1.5 p-5`}>
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-cream/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.12)]"
            />
          ))}
        </div>
      );
    case "blinds":
      return (
        <div className={`${base} relative`}>
          <div className="slat-pattern absolute inset-0 bg-cream/80 text-cocoa" />
          <div className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-cocoa/90 to-cocoa/40" />
          <div className="absolute bottom-6 left-1/2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-cocoa/40" />
        </div>
      );
    case "outdoor":
      return (
        <div className={`${base} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-b from-blush/70 to-tomato-dark/70" />
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent 0 18px, rgba(246,237,226,0.5) 18px 22px)",
            }}
          />
          <div className="absolute bottom-0 h-1/4 w-full bg-cream/20" />
        </div>
      );
    case "flyscreens":
      return (
        <div className={`${base} relative bg-cream/10`}>
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(221,203,184,0.4) 0 1px, transparent 1px 7px), repeating-linear-gradient(90deg, rgba(221,203,184,0.4) 0 1px, transparent 1px 7px)",
            }}
          />
          <div className="absolute inset-4 rounded-lg border-2 border-oat/40" />
        </div>
      );
    case "curtains":
    default:
      return (
        <div className={`${base} relative flex justify-center gap-1 p-3`}>
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="h-full flex-1 rounded-b-full"
              style={{
                background:
                  i % 2 === 0
                    ? "linear-gradient(180deg, rgba(246,237,226,0.95), rgba(243,195,181,0.6))"
                    : "linear-gradient(180deg, rgba(221,203,184,0.95), rgba(194,69,31,0.45))",
              }}
            />
          ))}
        </div>
      );
  }
}
