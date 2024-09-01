import { equal } from '@/utils/equal';

import type { TocEntry } from './table-of-content.type';

export function getIdFromUrl(url: string): string {
  return url.split('#')[1];
}

//* Recursive with flatMap and spread operator
//* Get all item ids from the table of content
export function getItemIds(
  tocEntries: TocEntry[],
  maxDepth: number = Infinity,
  currentDepth: number = 1,
): string[] {
  if (currentDepth > maxDepth) return [];

  return tocEntries.flatMap(({ items, url }) => {
    const itemId = getIdFromUrl(url);
    const hasItems = items && items.length > 0;
    const nextItemIds = getItemIds(items, maxDepth, currentDepth + 1);

    return [itemId, ...(hasItems ? nextItemIds : [])];
  });
}

//* Get passed ids before the active id in toc list
export function getPassedIds(itemIds: string[], activeId: string): string[] {
  const currentIndex = itemIds.findIndex((id) => equal(id, activeId));

  return itemIds.slice(0, currentIndex);
}

export function getMotionAnimateMarker(
  hasActiveId: boolean,
  itemHeight: number,
  passedIdsCount: number,
) {
  return {
    top: hasActiveId ? `calc(${itemHeight}px * ${passedIdsCount})` : itemHeight,
    scale: hasActiveId ? 1 : 0,
  };
}

export function getMotionAnimateBgIndicator(isActive: boolean) {
  return {
    width: isActive ? '100%' : 0,
    opacity: isActive ? 1 : 0,
    transition: { delay: 0.05 },
  };
}

//* Recursive with forEach and push
// export function getItemIds(
//   tocEntries: TocEntry[],
//   maxDepth: number = Infinity,
//   currentDepth: number = 1,
// ): string[] {
//   if (currentDepth > maxDepth) return [];

//   const itemIds: string[] = [];

//   tocEntries.forEach((entry) => {
//     itemIds.push(entry.url);

//     if (entry.items && entry.items.length > 0) {
//       itemIds.push(...getItemIds(entry.items, maxDepth, currentDepth + 1));
//     }
//   });

//   return itemIds;
// }
