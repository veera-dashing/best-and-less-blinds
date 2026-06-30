// Real product photography migrated from the original bestandlessblinds.com.au
// site (the business's own uploads — the watermarked theme stock was discarded).
// Optimised to ~1600px on the long edge; next/image handles responsive sizing.

const DIR = "/images/products";

export const photos = {
  plantationShutters: `${DIR}/plantation-shutters.jpg`,
  rollerBlinds: `${DIR}/roller-blind.jpg`,
  doubleRoller: `${DIR}/double-roller.jpg`,
  screenRoller: `${DIR}/blind-generic.jpg`,
  motorisedBlinds: `${DIR}/motorised-roller-blinds.jpg`,
  verticalBlinds: `${DIR}/vertical-blinds.jpg`,
  venetianBlinds: `${DIR}/venetian-blinds.jpg`,
  combiBlinds: `${DIR}/combi-blinds.jpg`,
  curtains: `${DIR}/curtains.jpg`,
  outdoor: `${DIR}/flyscreens.jpg`,
  hero: `${DIR}/main-hero.jpg`,
} as const;

// Ready-made shop items have no per-product photo, so fall back to a
// representative lifestyle shot for their category.
export function shopPhoto(category: string): string | undefined {
  if (category === "Blinds") return photos.venetianBlinds;
  if (category === "Curtains" || category === "Accessories") return photos.curtains;
  return undefined;
}
