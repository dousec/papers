import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const papers = defineCollection({
    loader: file('src/content/papers/papers.json'),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        pdf: z.string(),
        collection: z.string().optional(),
        collectionDescription: z.string().optional(),
        tags: z.array(z.string()).optional(),
        enableComments: z.boolean().optional(),
    }),
});

const about = defineCollection({
    loader: glob({ base: './src/content/about', pattern: '**/*.md' }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
    }),
});

export const collections = { papers, about };
