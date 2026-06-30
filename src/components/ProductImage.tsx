import Image from "next/image";
import { CategoryArt } from "./CategoryArt";

type Props = {
  /** Real photo path under /public. When absent, the CSS-art fallback renders. */
  src?: string;
  alt: string;
  /** CategoryArt slug used as a fallback when no photo exists for this item. */
  artSlug?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

// Renders a real product photo (optimised by next/image) where one exists,
// gracefully falling back to the lightweight CSS art otherwise. Both fill their
// positioned parent, so the call sites keep their aspect-ratio containers.
export function ProductImage({
  src,
  alt,
  artSlug,
  sizes,
  priority,
  className,
}: Props) {
  if (!src) return <CategoryArt slug={artSlug ?? "curtains"} />;

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes ?? "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
      className={
        className ??
        "object-cover transition-transform duration-700 group-hover:scale-105"
      }
    />
  );
}
