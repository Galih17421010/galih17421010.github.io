import { defineCollection, z } from 'astro:content';

const about = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    experienceYears: z.number(),
    bio: z.string(),
    heroTagline: z.string(),
    heroSubtitle: z.string(),
    avatar: z.string().optional(),
  }),
});

const skills = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    icon: z.string().default('fa-solid fa-code'),
    order: z.number().default(0),
    color: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().default('fa-solid fa-code'),
    tags: z.array(z.string()).default([]),
    liveUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    pubDate: z.coerce.date(),
  }),
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

export const collections = { about, skills, projects, posts };
