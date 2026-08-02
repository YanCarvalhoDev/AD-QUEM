import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const artigos = defineCollection({
  loader: glob({
    pattern: "**/([^_]*).{md,mdx,mdoc}",
    base: "./src/content/artigos",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      category: z.string(),
      date: z.any().optional(),
      debugDate: z.any().optional(),
      readingTime: z.string().default("5 mins"),
      authors: z.array(z.string()),
      heroImage: z
        .union([
          z.object({
            src: image(),
            alt: z.string().optional(),
          }),
          z.string(),
        ])
        .optional(),
      quote: z.string().optional(),
      specialistNote: z
        .object({
          title: z.string().optional(),
          content: z.string().optional(),
          linkText: z.string().optional(),
          linkUrl: z.string().optional(),
        })
        .optional(),
      podcastText: z.string().optional(),
      tags: z.array(z.string()).optional(),
      perguntasRapidas: z
        .array(
          z.object({
            pergunta: z.string().optional(),
            resposta: z.string().optional(),
          }),
        )
        .optional(),
    }),
});

const autores = defineCollection({
  loader: glob({
    pattern: "**/([^_]*).{json,yaml,md}",
    base: "./src/content/autores",
  }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string().default("Advogado Especialista"),
      oab: z.string().optional(), // 🌟 Adicionado baseado no seu Keystatic
      image: image().optional(),
      bio: z.string().optional(), // 🌟 Adicionado baseado no seu Keystatic
      whatsapp: z.string().optional(), // 🌟 Adicionado baseado no seu Keystatic
      instagram: z.string().optional(), // 🌟 Adicionado baseado no seu Keystatic
      email: z.string().optional(), // 🌟 Adicionado baseado no seu Keystatic
      linkedin: z.string().optional(), // 🌟 Adicionado baseado no seu Keystatic
      jusbrasil: z.string().optional(),
      tiktok: z.string().optional(),
      site: z.string().optional(),
      twitter: z.string().optional(),
      threads: z.string().optional(),
      facebook: z.string().optional(),
      youtube: z.string().optional(),
      knowsAbout: z.array(z.string()).default([]),
      featured: z.boolean().default(false), // 🌟 Adicionado baseado no seu Keystatic
    }),
});

const categorias = defineCollection({
  loader: glob({
    pattern: "**/([^_]*).{json,yaml,md}",
    base: "./src/content/categorias",
  }),
  schema: () =>
    z.object({
      name: z.string(),
      slug: z.string().optional(),
    }),
});

export const collections = { artigos, autores, categorias };
