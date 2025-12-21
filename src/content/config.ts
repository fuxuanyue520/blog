import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishedAt: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedAt: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		tags: z.array(z.string()).optional().default([]),
		category: z.enum(["tech", "essay", "project", "other"]),
		coverImage: z.string().optional(),
		isPinned: z.boolean().optional().default(false),
		draft: z.boolean().default(false),
	}),
});

export const collections = {
	posts: postsCollection,
};
