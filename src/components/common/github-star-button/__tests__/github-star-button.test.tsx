import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { act } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import GithubStarButton from '../github-star-button';

describe('GithubStarButton', () => {
  const href = 'https://github.com/anIcedAntFA/blog.ngockhoi96.dev';
  const count = 400;

  beforeEach(() => {
    render(
      <NextIntlClientProvider
        locale='en'
        messages={{
          components: {
            common: {
              githubStarButton: {
                tooltipLabel: 'Star this project on GitHub',
                ariaLabel: 'Star on GitHub',
                label: 'Star',
              },
            },
          },
        }}
      >
        <GithubStarButton href={href} count={count} />
      </NextIntlClientProvider>,
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render the star button with correct attributes', () => {
    const link = screen.getByRole('link');

    expect(link).toBeVisible();
    expect(link).toHaveAttribute('aria-label', 'Star on GitHub');
    expect(link).toHaveAttribute('href', href);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener');
  });

  it('should render correctly the star count', () => {
    screen.getByText(count.toString());
  });

  it('should render tooltip correctly', async () => {
    const link = screen.getByRole('link');

    const user = userEvent.setup();

    act(() => {
      user.hover(link);
    });

    const tooltip = await screen.findByRole('tooltip');
    expect(tooltip).toHaveTextContent('Star this project on GitHub');
  });
});
