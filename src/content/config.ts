import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('Julie Pham'),
    image: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
};