export function orderItemsForMasonryColumns(items, columnCount = 2) {
    const rowCount = Math.ceil(items.length / columnCount);
    const reordered = new Array(items.length);
    for (let i = 0; i < items.length; i++) {
        const col = i % columnCount;
        const row = Math.floor(i / columnCount);
        reordered[row + col * rowCount] = items[i];
    }
    return reordered;
}
