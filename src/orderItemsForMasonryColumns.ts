export function orderItemsForMasonryColumns<T>(
  items: T[],
  columnCount: number = 2
): T[] {
  const rowCount = Math.ceil(items.length / columnCount);
  const reordered: T[] = new Array(items.length);

  for (let i = 0; i < items.length; i++) {
    const col = i % columnCount;
    const row = Math.floor(i / columnCount);
    reordered[row + col * rowCount] = items[i];
  }

  return reordered;
}
