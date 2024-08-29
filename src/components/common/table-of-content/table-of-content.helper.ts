import type { TocEntry } from './table-of-content.type';

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

export function getIdFromUrl(url: string): string {
  return url.split('#')[1];
}

//* Recursive with flatMap and spread operator
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
