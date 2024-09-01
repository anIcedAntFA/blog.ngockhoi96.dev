import { it, expect, describe } from 'vitest';

import {
  getIdFromUrl,
  getItemIds,
  getPassedIds,
} from '../table-of-content.helper';
import type { TocEntry } from '../table-of-content.type';

const tocEntries: TocEntry[] = [
  {
    title: 'Heading 1',
    url: '#heading-1',
    items: [
      {
        title: 'Heading 1.1',
        url: '#heading-1.1',
        items: [
          {
            title: 'Heading 1.1.1',
            url: '#heading-1.1.1',
            items: [],
          },
        ],
      },
    ],
  },
  {
    title: 'Heading 2',
    url: '#heading-2',
    items: [
      {
        title: 'Heading 2.1',
        url: '#heading-2.1',
        items: [],
      },
    ],
  },
  {
    title: 'Heading 3',
    url: '#heading-3',
    items: [],
  },
];

const itemIds = [
  'heading-1',
  'heading-1.1',
  'heading-1.1.1',
  'heading-2',
  'heading-2.1',
  'heading-3',
];

describe('getIdFromUrl', () => {
  it('should return the id from the url', () => {
    expect(getIdFromUrl('#heading-1234')).toBe('heading-1234');
  });
});

describe('getItemIds', () => {
  it('should return empty array if the current depth is greater than the max depth', () => {
    expect(getItemIds(tocEntries, 0)).toEqual([]);
  });

  it('should return all item ids from the table of content', () => {
    expect(getItemIds(tocEntries)).toEqual(itemIds);
  });
});

describe('getPassedIds', () => {
  it('should return passed ids before the active id in toc list', () => {
    const activeId = 'heading-2.1';

    expect(getPassedIds(itemIds, activeId)).toEqual([
      'heading-1',
      'heading-1.1',
      'heading-1.1.1',
      'heading-2',
    ]);
  });
});
