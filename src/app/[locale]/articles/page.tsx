import type { Metadata } from 'next';
import { cookies } from 'next/headers';
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

  const cookieStore = cookies();

  return (
    <div>
      <div>
        <h1>Article</h1>
        <Link href="/">Home</Link>

        <pre>{result.title}</pre>
      </div>

      <div>
        {cookieStore.getAll().map((cookie) => (
          <div key={cookie.name}>
            <p>Name: {cookie.name}</p>
            <p>Value: {cookie.value}</p>
          </div>
        ))}
      </div>

      <Dummy />
    </div>
  );
}

export default ArticlePage;
