import { Metadata } from 'next';
import Image from 'next/image';

import { posts } from '#site/content';

export const runtime = 'edge';

interface IPostProps {
  params: {
    slug: string;
  };
}

function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function generateMetadata({ params }: IPostProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (post == null) return {};
  return { title: post.title, description: post.description };
}

function PostsPage({ params }: IPostProps) {
  const post = getPostBySlug(params.slug);

  if (post == null) {
    return <div>Post not found</div>;
  }

  return (
    <article className="prose lg:prose-lg dark:prose-invert py-6">
      <h1 className="mb-2">{post.title}</h1>

      <p className="mt-0 text-xl text-slate-700 dark:text-slate-200">
        {post.description}
      </p>

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

      <hr className="my-4" />
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}

export default PostsPage;
