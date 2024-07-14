import type { Metadata } from 'next';

import ArticleViewLayouts from './_components/article-view-layouts';
import ArticleViewList from './_components/article-view-list';
import styles from './page.module.css';

export const runtime = 'edge';

// interface ITodo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

export const metadata: Metadata = {
  title: 'About',
  description: 'About page',
};

const posts = [
  {
    id: 1,
    author: 'ngockhoi96',
    avatar:
      'https://images.unsplash.com/photo-1568162603664-fcd658421851?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    modifiedDate: 'June 23, 2024',
    readingTime: '15 min read',
    title: 'How to build your custom Tab component in Reactjs',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nemo ex perspiciatis rerum laudantium quae autem tempora harum, perferendis nulla, accusantium incidunt, provident optio labore totam neque cum. Atque, soluta.',
    thumbnail:
      'https://images.unsplash.com/photo-1719032168861-994a74306944?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['react', 'typescript', 'testing'],
  },
  {
    id: 2,
    author: 'ngockhoi96',
    avatar:
      'https://images.unsplash.com/photo-1568162603664-fcd658421851?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    modifiedDate: 'June 23, 2024',
    readingTime: '15 min read',
    title: 'How to build your custom Tab component in Reactjs',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nemo ex perspiciatis rerum laudantium quae autem tempora harum, perferendis nulla, accusantium incidunt, provident optio labore totam neque cum. Atque, soluta.',
    thumbnail:
      'https://images.unsplash.com/photo-1719032168861-994a74306944?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['react', 'typescript', 'testing'],
  },
  {
    id: 3,
    author: 'ngockhoi96',
    avatar:
      'https://images.unsplash.com/photo-1568162603664-fcd658421851?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    modifiedDate: 'June 23, 2024',
    readingTime: '15 min read',
    title: 'How to build your custom Tab component in Reactjs',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nemo ex perspiciatis rerum laudantium quae autem tempora harum, perferendis nulla, accusantium incidunt, provident optio labore totam neque cum. Atque, soluta.',
    thumbnail:
      'https://images.unsplash.com/photo-1719032168861-994a74306944?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['react', 'typescript', 'testing'],
  },
  {
    id: 4,
    author: 'ngockhoi96',
    avatar:
      'https://images.unsplash.com/photo-1568162603664-fcd658421851?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    modifiedDate: 'June 23, 2024',
    readingTime: '15 min read',
    title: 'How to build your custom Tab component in Reactjs',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nemo ex perspiciatis rerum laudantium quae autem tempora harum, perferendis nulla, accusantium incidunt, provident optio labore totam neque cum. Atque, soluta.',
    thumbnail:
      'https://images.unsplash.com/photo-1719032168861-994a74306944?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['react', 'typescript', 'testing'],
  },
  {
    id: 5,
    author: 'ngockhoi96',
    avatar:
      'https://images.unsplash.com/photo-1568162603664-fcd658421851?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    modifiedDate: 'June 23, 2024',
    readingTime: '15 min read',
    title: 'How to build your custom Tab component in Reactjs',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nemo ex perspiciatis rerum laudantium quae autem tempora harum, perferendis nulla, accusantium incidunt, provident optio labore totam neque cum. Atque, soluta.',
    thumbnail:
      'https://images.unsplash.com/photo-1719032168861-994a74306944?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['react', 'typescript', 'testing'],
  },
  {
    id: 6,
    author: 'ngockhoi96',
    avatar:
      'https://images.unsplash.com/photo-1568162603664-fcd658421851?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    modifiedDate: 'June 23, 2024',
    readingTime: '15 min read',
    title: 'How to build your custom Tab component in Reactjs',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nemo ex perspiciatis rerum laudantium quae autem tempora harum, perferendis nulla, accusantium incidunt, provident optio labore totam neque cum. Atque, soluta.',
    thumbnail:
      'https://images.unsplash.com/photo-1719032168861-994a74306944?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['react', 'typescript', 'testing'],
  },
];

async function ArticlePage() {
  // const data: Response = await fetch(
  //   'https://jsonplaceholder.typicode.com/todos/1',
  // );

  // const result: ITodo = await data.json();

  return (
    <div className={styles.wrapper}>
      <div className={styles.control}>
        <div>tab filter</div>
        <ArticleViewLayouts />
      </div>

      <ArticleViewList data={posts} isLoading={false} />
    </div>
  );
}

export default ArticlePage;
