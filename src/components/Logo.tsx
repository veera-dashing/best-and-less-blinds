import Image from "next/image";
import { business } from "@/lib/content";

// The original brand logo (orange "Best & Less" wordmark + slat mark on a white
// field). The client asked to retain it exactly, so we use the real artwork
// migrated from the old site rather than a redrawn mark.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/logo.jpg"
      alt={`${business.name} logo`}
      width={500}
      height={199}
      priority
      // The logo is already web-sized; skip the optimizer (and its dev-mode
      // quirks) and serve the original artwork directly.
      unoptimized
      className={`h-11 w-auto sm:h-12 ${className}`}
    />
  );
}
