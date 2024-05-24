import { useTranslations } from 'next-intl';
import Image from 'next/image';

import vercelLogo from '/public/favicons/vercel.svg';

export const runtime = 'edge';

export default function Home() {
  const t = useTranslations('home');

  return (
    <main>
      <div>
        <h1>{t('metadata.title')}</h1>
        <h3>{t('metadata.subtitle')}</h3>
        <p>
          Get started by editing&nbsp;
          <code>src/app/page.tsx</code>
        </p>
        <div>I am invisible</div>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src={vercelLogo}
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
    </main>
  );
}
