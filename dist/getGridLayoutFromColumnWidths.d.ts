/**
 * getGridLayoutFromColumnWidths
 *
 * @description -- given an array of numbers representing the percentage widths of columns in a grid, this function returns an object with two properties: `gridCols` (the number of grid-template-columns to use) and `colSpans` (an array of the percentage values represented as corresponding column span values). All the `colSpans` values add up to the `gridCols` value. The maximum `gridCols` value is `12`. The function should optimize for finding the smallest possible number of `gridCols` to use given the percentages provided.
 *
 * @examples -- the following examples illustrate the expected return values:
 *    getGridLayoutFromColumnWidths([50, 50]); // ==> { gridCols: 2, colSpans: [1, 1] }
 *    getGridLayoutFromColumnWidths([33, 33, 33]); // ==> { gridCols: 3, colSpans: [1, 1, 1] }
 *    getGridLayoutFromColumnWidths([50, 25, 25]); // ==> { gridCols: 4, colSpans: [2, 1, 1] }
 *    getGridLayoutFromColumnWidths([46, 8, 12, 34]); // ==> { gridCols: 10, colSpans: [5, 1, 1, 3] }
 *    getGridLayoutFromColumnWidths([40, 60]); // ==> { gridCols: 5, colSpans: [2, 3] }
 *
 *    When the %s don't add up to 100, we adjust them proportionally so they add up to 100 before converting to colSpans:
 *      --> getGridLayoutFromColumnWidths([50, 70]); // ==> { gridCols: 5, colSpans: [2, 3] }
 */
export declare const getGridLayoutFromColumnWidths: (percentages: number[], maxGridCols?: number) => {
    gridCols: number;
    colSpans: number[];
};
