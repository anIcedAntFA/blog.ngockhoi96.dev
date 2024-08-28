import { defineCollection, defineConfig, s } from 'velite';

// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.

const author = defineCollection({
  name: 'Author',
  pattern: 'authors/**/*.mdx',
  schema: s.object({
    title: s.string().max(99),
    description: s.string().max(199).optional(),
    slug: s.path(),
  }),
});

const articles = defineCollection({
  name: 'Articles', // collection type name
  pattern: 'articles/**/*.mdx', // content files glob pattern
  schema: s
    .object({
      title: s.string().max(99), // Zod primitive type
      description: s.string().max(199),
      slug: s.slug('articles'), // validate format, unique in posts collection
      // slug: s.path(), // auto generate slug from file path
      date: s.isodate(), // input Date-like string, output ISO Date string.
      // cover: s.image(), // input image relative path, output image object with blurImage.
      cover: s.string().max(99),
      video: s.file().optional(), // input file relative path, output file public path.
      metadata: s.metadata(), // extract markdown reading-time, word-count, etc.
      excerpt: s.excerpt(), // excerpt of markdown content
      content: s.markdown(), // transform markdown to html
      toc: s.toc(), // table of content,
      body: s.mdx(), // transform mdx to html
    })
    // more additional fields (computed fields)
    .transform((data) => ({ ...data, permalink: `/blog/${data.slug}` })),
});

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { author, articles },
});
