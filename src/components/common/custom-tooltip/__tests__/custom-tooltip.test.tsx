import { render, screen, waitFor } from '@testing-library/react';
import type { UserEvent } from '@testing-library/user-event';
import { userEvent } from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';

import CustomTooltip from '../custom-tooltip';

describe('CustomTooltip', () => {
  let target: HTMLElement;
  let user: UserEvent;

  beforeEach(() => {
    render(
      <CustomTooltip label='Tooltip' hasArrow>
        Hover me
      </CustomTooltip>,
    );
    target = screen.getByText('Hover me');
    user = userEvent.setup();
  });

  it('should not render in default', () => {
    const tooltip = screen.queryByRole('tooltip');
    expect(tooltip).not.toBeInTheDocument();
  });

  it('should render correctly when hover target element', async () => {
    await user.hover(target);
    const tooltip = screen.getByRole('tooltip');
    expect(tooltip).toHaveTextContent('Tooltip');
  });

  it('should unmount tooltip when unhover', async () => {
    await user.hover(target);
    await user.unhover(target);

    await waitFor(() => {
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });
  });
});
