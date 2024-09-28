import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { describe, expect, it } from 'vitest';

import Button from '@/components/common/button';

import Link from '../link';

describe('Link', () => {
  it('should render link with external link', () => {
    render(<Link to='https://google.com'>Click me</Link>);

    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('href', 'https://google.com');
  });

  it('should render link with href starting with `/about`', () => {
    render(
      <NextIntlClientProvider locale='en'>
        <Link href='/about'>Click me</Link>
      </NextIntlClientProvider>,
    );

    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('href', '/en/about');
  });

  it('should render a link button with href starting with `/about`', () => {
    render(
      <NextIntlClientProvider locale='en'>
        <Link href='/about' passHref legacyBehavior>
          <Button>click me</Button>
        </Link>
      </NextIntlClientProvider>,
    );

    const link = screen.queryByRole('link');
    const button = screen.getByRole('button');

    expect(link).not.toBeInTheDocument();
    expect(button).toHaveAttribute('href', '/en/about');
  });
});
