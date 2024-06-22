import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import ContactIcon from '@/components/icons/contact-icon';

import Tag from '../components/tag';
import TagCloseTrigger from '../components/tag-close-trigger';
import TagIcon from '../components/tag-icon';
import TagLabel from '../components/tag-label';

describe('Tag', () => {
  it('should render correctly tag and tag label', () => {
    render(
      <Tag>
        <TagLabel>#typescript</TagLabel>
      </Tag>,
    );

    const tag = screen.getByTestId('tag');
    expect(tag).toHaveAttribute('data-variant', 'subtle');
    expect(tag).toHaveAttribute('data-size', 'medium');
    expect(tag).toHaveAttribute('data-color', 'primary');

    const tagLabel = within(tag).getByTestId('tag-label');
    expect(tagLabel).toHaveTextContent('#typescript');
  });

  it('should render correctly tag with onClick function', async () => {
    const onClick = vi.fn(() => 'clicked');

    render(
      <Tag onClick={onClick}>
        <TagLabel>#reactjs</TagLabel>
      </Tag>,
    );

    const tag = screen.getByTestId('tag');
    expect(tag).toHaveProperty('role', 'button');
    expect(tag).toHaveProperty('tabIndex', 0);
    expect(tag).toHaveAttribute('data-clickable', 'true');

    const user = userEvent.setup();
    await user.click(tag);

    expect(onClick).toHaveBeenCalledOnce();
    expect(onClick).toHaveReturnedWith('clicked');
  });

  it('should render correctly tag with icon', () => {
    render(
      <Tag>
        <TagIcon>
          <ContactIcon />
        </TagIcon>
        <TagLabel>#golang</TagLabel>
      </Tag>,
    );

    const tag = screen.getByTestId('tag');

    const tagIcon = within(tag).getByTestId('tag-icon');
    expect(tagIcon.firstChild).toBeInstanceOf(SVGElement);
  });

  it('should render correctly tag with close trigger', async () => {
    const onClose = vi.fn(() => 'closed');
    const onClick = vi.fn(() => 'clicked');

    render(
      <Tag onClick={onClick}>
        <TagLabel>#postgres</TagLabel>
        <TagCloseTrigger onClick={onClose} />
      </Tag>,
    );

    const tag = screen.getByTestId('tag');

    const tagCloseTrigger = within(tag).getByTestId('tag-close-trigger');
    expect(tagCloseTrigger).toHaveProperty('type', 'button');
    expect(tagCloseTrigger).toHaveAttribute('aria-label', 'close');

    const user = userEvent.setup();
    await user.click(tagCloseTrigger);

    expect(onClose).toHaveBeenCalledOnce();
    expect(onClose).toHaveReturnedWith('closed');

    expect(onClick).not.toHaveBeenCalled();
  });
});
