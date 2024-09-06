import type { Metadata } from 'next';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { articles as allPosts } from '#site/content';
import ScrollProgressBar from '@/components/common/scroll-progress-bar';
import TableOfContent from '@/components/common/table-of-content';
import MDXContent from '@/components/mdx';

import styles from './page.module.css';

export const runtime = 'edge';

interface IPostProps {
  params: {
    slug: string;
  };
}

// async function getDocFromParams(params) {
//   const slug = params.slug?.join('/') || '';
//   const doc = allPosts.find((doc) => doc. === slug);

//   if (!doc) {
//     null;
//   }

//   return doc;
// }

function getPostBySlug(slug: string) {
  return allPosts.find((post) => post.slug === slug);
}

export function generateMetadata({ params }: IPostProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (post == null) return {};
  return { title: post.title, description: post.description };
}

function PostsPage({ params }: IPostProps) {
  const post = getPostBySlug(params.slug);

  const t = useTranslations('articles.components.tableOfContents');

  if (post == null) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <ScrollProgressBar />
      <main className={styles.wrapper}>
        <article className="prose lg:prose-lg dark:prose-invert py-6">
          {post.cover && (
            <Image
              src={post.cover}
              alt={post.title}
              width={626}
              height={348}
              quality={80}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
            />
          )}

          <Image
            src={post.cover}
            alt={post.title}
            width={626}
            height={348}
            quality={50}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
          />

          <h1 className={styles.heading}>{post.title}</h1>

          <p className="mt-0 text-xl text-slate-700 dark:text-slate-200">
            {post.description}
          </p>

          <hr className="my-4" />

          <MDXContent code={post.body} />
        </article>
        <div>
          <TableOfContent
            title={t('title')}
            toc={post.toc}
            id="toc-in-this-article"
          />
        </div>
      </main>
    </>
  );
}

export default PostsPage;
