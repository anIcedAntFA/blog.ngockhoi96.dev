import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import ArrowUpIcon from '@/components/icons/arrow-up-icon';

import Button from '../button';

describe('Button', () => {
  it('should render button with correct label', () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole('button');
    const label = within(button).getByTestId('button-label');

    expect(label).toHaveTextContent('Click me');
  });

  it('should render button with left icon', () => {
    render(
      <Button icon={{ children: <ArrowUpIcon />, position: 'left' }}>
        Click me
      </Button>,
    );

    const button = screen.getByRole('button');
    const label = within(button).getByTestId('button-label');
    const icon = within(button).getByTestId('button-icon-left');

    expect(button.firstChild).toBe(icon);
    expect(button.lastChild).toBe(label);
    expect(icon.firstChild).toBeInstanceOf(SVGElement);
  });

  it('should render button with right icon', () => {
    render(
      <Button icon={{ children: <ArrowUpIcon />, position: 'right' }}>
        Click me
      </Button>,
    );

    const button = screen.getByRole('button');
    const label = within(button).getByTestId('button-label');
    const icon = within(button).getByTestId('button-icon-right');

    expect(button.firstChild).toBe(label);
    expect(button.lastChild).toBe(icon);
    expect(icon.firstChild).toBeInstanceOf(SVGElement);
  });

  it('should render button with default loading icon', () => {
    render(
      <Button
        loading={{
          enabled: true,
          position: 'left',
        }}
        icon={{
          position: 'right',
          children: <ArrowUpIcon />,
        }}
      >
        Click me
      </Button>,
    );

    const button = screen.getByRole('button');
    const label = within(button).getByTestId('button-label');
    const loadingIcon = within(button).getByTestId('button-loading-icon-left');
    const rightIcon = within(button).queryByTestId('button-icon-right');

    expect(button.firstChild).toBe(loadingIcon);
    expect(button.lastChild).toBe(label);
    expect(rightIcon).not.toBeInTheDocument();
  });

  it('should render button with custom loading icon', () => {
    render(
      <Button
        loading={{
          enabled: true,
          position: 'left',
          icon: <ArrowUpIcon data-testid='custom-loading-icon-left' />,
        }}
      >
        Click me
      </Button>,
    );

    const button = screen.getByRole('button');
    const customIcon = within(button).getByTestId('custom-loading-icon-left');

    expect(customIcon).toBeInstanceOf(SVGElement);
  });

  it('should render button with default loading icon false', () => {
    render(
      <Button
        loading={{
          enabled: false,
          position: 'right',
        }}
        icon={{
          position: 'left',
          children: <ArrowUpIcon />,
        }}
      >
        Click me
      </Button>,
    );

    const button = screen.getByRole('button');
    const label = within(button).getByTestId('button-label');
    const leftIcon = within(button).getByTestId('button-icon-left');
    const loadingIcon = within(button).queryByTestId(
      'button-loading-icon-right',
    );

    expect(button).toHaveAttribute('aria-disabled', 'false');
    expect(button).not.toBeDisabled();
    expect(button.firstChild).toBe(leftIcon);
    expect(button.lastChild).toBe(label);
    expect(loadingIcon).not.toBeInTheDocument();
  });

  it('should render button with loading text', () => {
    render(
      <Button
        loading={{
          enabled: true,
          position: 'left',
          text: 'loading...',
        }}
      >
        Click me
      </Button>,
    );

    const button = screen.getByRole('button');
    const label = within(button).getByTestId('button-label');

    expect(label).toHaveTextContent('loading...');
    expect(label).not.toHaveTextContent('Click me');
  });

  it('should not call onClick when button is not clicked', async () => {
    const onClick = vi.fn(() => 'clicked');

    render(<Button onClick={onClick}>Click me</Button>);

    expect(onClick).not.toHaveBeenCalled();
  });

  it('should call onClick when button is clicked', async () => {
    const onClick = vi.fn(() => 'clicked');

    render(<Button onClick={onClick}>Click me</Button>);

    const button = screen.getByRole('button');

    const user = userEvent.setup();

    await user.click(button);

    expect(onClick).toHaveBeenCalledOnce();
    expect(onClick).toHaveReturnedWith('clicked');
  });
});
