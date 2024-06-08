import { render } from '@testing-library/react';
import { NextIntlClientProvider, useMessages, useTimeZone } from 'next-intl';
import { describe, expect, it, vi } from 'vitest';

import LocaleProvider from '../locale-provider';

vi.mock('next-intl', () => ({
  NextIntlClientProvider: vi.fn(({ children }) => children),
  useMessages: vi.fn(() => ({
    'en-US': { greeting: 'Hello!' },
    'vi-VN': { greeting: 'Xin chào!' },
  })),
  useTimeZone: vi.fn(() => 'UTC'),
}));

describe('LocaleProvider', () => {
  it('should render with correct messages and timezone', () => {
    render(
      <LocaleProvider>
        <div>Child</div>
      </LocaleProvider>,
    );

    expect(useMessages).toHaveBeenCalled();
    expect(useTimeZone).toHaveBeenCalled();
    expect(NextIntlClientProvider).toHaveBeenCalledWith(
      {
        messages: {
          'en-US': { greeting: 'Hello!' },
          'vi-VN': { greeting: 'Xin chào!' },
        },
        timeZone: 'UTC',
        children: <div>Child</div>,
      },
      expect.any(Object),
    );
  });
});
