import type { CollectionEntry } from "astro:content";

// same priority sorting as on Codility
export const sortCodility = (a: CollectionEntry<"codility">, b: CollectionEntry<"codility">) => {
  return (
    a.data.section.localeCompare(b.data.section) ||
    a.data.difficulty.localeCompare(b.data.difficulty) ||
    a.data.title.localeCompare(b.data.title)
  );
};
