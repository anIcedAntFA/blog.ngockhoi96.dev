import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import GithubStarButton from '../github-star-button';

describe('GithubStarButton', () => {
  const href = 'https://github.com/anIcedAntFA/blog.ngockhoi96.dev';
  const count = 400;

  beforeEach(() => {
    render(<GithubStarButton href={href} count={count} />);
  });

  it('should render the star button with correct attributes', () => {
    const link = screen.getByRole('link', { name: 'Star button' });

    expect(link).toBeVisible();
    expect(link).toHaveAttribute('aria-label', 'Star button');
    expect(link).toHaveAttribute('href', href);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener');
  });

  it('should render correctly the star count', () => {
    screen.getByText(count.toString());
  });
});
