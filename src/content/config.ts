// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// layout: "../../layouts/MarkdownLayout.astro"
// section: "Lesson 1: Iterations"
// title: "Binary Gap"
// description: "A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N."
// tags: ["Iterations"]

// 2. Define a `type` and `schema` for each collection
const codilityCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    section: z.string(),
    tags: z.array(z.string()),
    date: z.date(),
    difficulty: z.enum(["Easy", "Medium", "Hard"])
  })
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  codility: codilityCollection
};
