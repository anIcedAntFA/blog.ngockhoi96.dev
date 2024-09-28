import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import ContactIcon from '@/components/icons/contact-icon';

import Tag from '../components/tag';
import TagCloseTrigger from '../components/tag-close-trigger';
import TagIcon from '../components/tag-icon';
import TagLabel from '../components/tag-label';

describe('Tag', () => {
  it('it should throw an error if used outside of `TagProvider`', () => {
    vi.spyOn(console, 'error').mockImplementation(() => null);

    expect(() =>
      render(
        <>
          <TagLabel>#docker</TagLabel>
          <TagCloseTrigger onClick={vi.fn()} />
        </>,
      ),
    ).toThrowError('useTagContext must be used within a TagProvider');
  });

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

  it('should render correctly tag with `onClick` and `onKeyDown` function', async () => {
    const onClickMock = vi.fn().mockImplementation(() => 'clicked');
    const onKeyDownMock = vi.fn().mockImplementation(() => 'pressed');

    render(
      <Tag onClick={onClickMock} onKeyDown={onKeyDownMock}>
        <TagLabel>#reactjs</TagLabel>
      </Tag>,
    );

    const tag = screen.getByTestId('tag');
    const user = userEvent.setup();

    expect(tag).toHaveProperty('role', 'button');
    expect(tag).toHaveProperty('tabIndex', 0);
    expect(tag).toHaveAttribute('data-clickable', 'true');

    await user.click(tag);
    expect(onClickMock).toHaveBeenCalledOnce();
    expect(onClickMock).toHaveReturnedWith('clicked');

    await user.keyboard('{enter}');
    expect(onKeyDownMock).toHaveBeenCalledOnce();
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
    const onCloseMock = vi.fn().mockImplementation(() => 'closed');
    const onClickMock = vi.fn().mockImplementation(() => 'clicked');

    render(
      <Tag onClick={onClickMock}>
        <TagLabel>#postgres</TagLabel>
        <TagCloseTrigger onClick={onCloseMock} />
      </Tag>,
    );

    const tag = screen.getByTestId('tag');
    const tagCloseTrigger = within(tag).getByTestId('tag-close-trigger');
    const user = userEvent.setup();

    expect(tagCloseTrigger).toHaveProperty('type', 'button');
    expect(tagCloseTrigger).toHaveAttribute('aria-label', 'close');

    await user.click(tagCloseTrigger);
    expect(onCloseMock).toHaveBeenCalledOnce();
    expect(onCloseMock).toHaveReturnedWith('closed');
    expect(onClickMock).not.toHaveBeenCalled();
  });
});
