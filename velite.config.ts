// import { fromHtml } from 'hast-util-from-html';
// import { toString } from 'hast-util-to-string';
// import { h } from 'hastscript';
// import type { Options as RALOptions } from 'rehype-autolink-headings';
// import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeMdxCodeProps from 'rehype-mdx-code-props';
import rehypeSlug from 'rehype-slug';
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

const existingSlugs = new Set();

const articles = defineCollection({
  name: 'Articles', // collection type name
  pattern: '{en,vi}/articles/**/*.mdx', // content files glob pattern
  schema: s
    .object({
      title: s.string().max(99), // Zod primitive type
      description: s.string().max(199),
      slug: s.string(), // validate format, unique in posts collection
      locale: s.enum(['en', 'vi']), // enum type
      date: s.isodate(), // input Date-like string, output ISO Date string.
      // cover: s.image(), // input image relative path, output image object with blurImage.
      cover: s.string().max(99),
      video: s.file().optional(), // input file relative path, output file public path.
      metadata: s.metadata(), // extract markdown reading-time, word-count, etc.
      toc: s.toc(), // table of content,
      body: s.mdx(), // transform mdx to html
      excerpt: s.excerpt(),
    })
    .refine(
      (data) => {
        //* Custom validation to ensure unique slug-language combination
        const slugLocaleKey = `${data.slug}-${data.locale}`;
        if (existingSlugs.has(slugLocaleKey)) {
          return true;
        }
        existingSlugs.add(slugLocaleKey);
        return false;
      },
      {
        message: 'Slug must be unique per language',
        path: ['slug'],
      },
    )
    //* more additional fields (computed fields)
    .transform((data) => ({
      ...data,
      permalink: `${data.locale}/articles/${data.slug}`,
    })),
});

// const hashIcon = `
//   <span aria-hidden="true" className="md-hash-heading-icon">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="4" x2="20" y1="9" y2="9" />
//       <line x1="4" x2="20" y1="15" y2="15" />
//       <line x1="10" x2="8" y1="3" y2="21" />
//       <line x1="16" x2="14" y1="3" y2="21" />
//     </svg>
//   </span>
// `;

// const rehypeAutolinkOptions = {
//   behavior: 'prepend',
//   headingProperties(node) {
//     return {
//       dir: 'auto',
//       className: ['md-heading', `md-heading-${node.tagName[1]}`],
//     };
//   },
//   properties(node) {
//     return {
//       ariaHidden: true,
//       tabIndex: -1,
//       ariaLabel: `Permalink: ${toString(node)}`,
//       className: ['md-heading-anchor'],
//     };
//   },
//   content(node) {
//     return [
//       h('span.visually-hidden', {
//         children: `Read the "${toString(node)}" section`,
//       }),
//       fromHtml(hashIcon, { fragment: true }),
//     ];
//   },
// } as RALOptions;

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
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      rehypeMdxCodeProps,
      // [rehypeAutolinkHeadings, rehypeAutolinkOptions],
    ],
  },
  // prepare(data, context) {
  //   console.log(data, context);
  // },
});
