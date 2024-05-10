// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

const codilityCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    section: z.string(),
    tags: z.array(z.string()),
    difficulty: z.enum(["Easy", "Medium", "Hard"]),
    date: z.coerce.date()
  })
});

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    date: z.coerce.date()
  })
});

export const collections = {
  codility: codilityCollection,
  blog: blogCollection
};
