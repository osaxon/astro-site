import { z, defineCollection } from "astro:content";

const posts = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        draft: z.boolean(),
    }),
});

export const collections = { posts };
