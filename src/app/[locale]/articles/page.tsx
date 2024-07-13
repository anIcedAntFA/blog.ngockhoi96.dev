import type { Metadata } from 'next';
import Link from 'next/link';

import Dummy from '@/components/dummy';

export const runtime = 'edge';

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const metadata: Metadata = {
  title: 'About',
  description: 'About page',
};

async function ArticlePage() {
  const data: Response = await fetch(
    'https://jsonplaceholder.typicode.com/todos/1',
  );

  const result: ITodo = await data.json();

  return (
    <div>
      <div>
        <h1>Article</h1>
        <Link href="/">Home</Link>

        <pre>{result.title}</pre>
      </div>

      <Dummy />
    </div>
  );
}

export default ArticlePage;
