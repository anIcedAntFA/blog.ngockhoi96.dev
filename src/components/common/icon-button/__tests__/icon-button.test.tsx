import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import ArrowLeftIcon from '@/components/icons/arrow-left-icon';

import IconButton from '../icon-button';

describe('IconButton', () => {
  it('should render correctly, including the corresponding ARIA attributes', () => {
    render(
      <IconButton id='search icon button' label='search'>
        <span>🔍</span>
      </IconButton>,
    );

    const button = screen.getByRole('button', { name: 'search' });

    expect(button).toBeVisible();
    expect(button).toHaveAttribute('id', 'search icon button');
    expect(button).toHaveAttribute('aria-label', 'search');
    expect(button).toHaveAttribute('aria-disabled', 'false');
    expect(button).toHaveAttribute('data-variant', 'contained');
    expect(button).toHaveAttribute('data-size', 'medium');
    expect(button).toHaveAttribute('data-color', 'base');
    expect(button).toContainElement(screen.getByText('🔍'));
  });

  it('should call onClick when button is clicked', async () => {
    const onClick = vi.fn(() => 'clicked');
    const user = userEvent.setup();

    render(
      <IconButton label='email' onClick={onClick}>
        <ArrowLeftIcon />
      </IconButton>,
    );

    const button = screen.getByRole('button', { name: 'email' });
    await user.click(button);

    expect(onClick).toHaveBeenCalledOnce();
    expect(onClick).toHaveReturnedWith('clicked');
  });
});
