export function isUniqueArray<T>(array: T[]): boolean {
  if (!Array.isArray(array)) {
    return false;
  }

  const set = new Set(array);

  return set.size === array.length;
}

export function duplicatedArrayElements<T>(array: T[]): T[] {
  const duplicateKeys = array.filter(
    (key, index) => array.indexOf(key) !== index,
  );

  return duplicateKeys;
}
