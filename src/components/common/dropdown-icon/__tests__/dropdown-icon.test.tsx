import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import DropdownIcon from '../dropdown-icon';

describe('DropdownIcon', () => {
  it('should render a dropdown icon with default type `rotate`', () => {
    render(<DropdownIcon />);

    const dropdownIcon = screen.getByTestId('dropdown-icon');
    const chevronDownIcon =
      within(dropdownIcon).getByTestId('chevron-down-icon');

    expect(dropdownIcon).toBeVisible();
    expect(dropdownIcon).toHaveAttribute('data-active', 'false');
    expect(chevronDownIcon.firstChild).toBeInstanceOf(SVGElement);
  });

  it('should render a dropdown icon with type `close`', () => {
    render(<DropdownIcon type='close' />);

    const dropdownIcon = screen.getByTestId('dropdown-icon');

    expect(dropdownIcon).toBeVisible();
    expect(dropdownIcon).toHaveAttribute('aria-hidden', 'true');
    expect(dropdownIcon).toHaveAttribute('data-active', 'false');
  });

  it('should render a dropdown icon with active state', () => {
    render(<DropdownIcon active />);

    const dropdownIcon = screen.getByTestId('dropdown-icon');

    expect(dropdownIcon).toHaveAttribute('data-active', 'true');
  });
});
