"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGridLayoutFromColumnWidths = void 0;
const getGridLayoutFromColumnWidths = (percentages, maxGridCols = 12) => {
    // Normalize percentages if they don't sum to 100
    const total = percentages.reduce((sum, current) => sum + current, 0);
    if (total !== 100) {
        percentages = percentages.map((p) => (p / total) * 100);
    }
    // Function to find "Greatest Common Divisor" (GCD) of two numbers
    const gcd = (a, b) => {
        return b === 0 ? a : gcd(b, a % b);
    };
    // Find GCD of all percentages
    let commonDivisor = percentages[0];
    for (let i = 1; i < percentages.length; i++) {
        commonDivisor = gcd(commonDivisor, percentages[i]);
    }
    // Ensure the gridCols doesn't exceed maxGridCols (default 12)
    let gridCols = 100 / commonDivisor;
    if (gridCols > maxGridCols) {
        gridCols = maxGridCols;
        commonDivisor = 100 / maxGridCols;
    }
    // Calculate colSpans
    const colSpans = percentages.map((p) => Math.round(p / commonDivisor));
    return { gridCols, colSpans };
};
exports.getGridLayoutFromColumnWidths = getGridLayoutFromColumnWidths;
//! INITIAL VERSION
// export const getGridLayoutFromColumnWidths = (
//   columnWidths: number[],
//   gridSystemNumColumns = 6
// ) => {
//   const numColumns = columnWidths.length;
//   /**
//    * Step 1. ensure column widths add up to 100% (Gutenberg doesn't force this; they can add up to more or less but we don't want that!)
//    *    eg. 2 columns with 60% and 45% widths (total of 105%) will be adjusted below to become 57.5% and 42.5% (total of 100%)
//    */
//   let totalWidth = 0;
//   columnWidths.forEach((width) => {
//     if (width) totalWidth += width;
//   });
//   const isOver = totalWidth > 100;
//   const isUnder = totalWidth < 100;
//   if (isOver || isUnder) {
//     const extra = Math.abs(100 - totalWidth);
//     const adjustment = extra / numColumns.length;
//     columnWidths = columnWidths.map((width) =>
//       isOver ? width - adjustment : width + adjustment
//     );
//   }
//   /**
//    * Step 2. loop through columnWidths and convert each percentage value to an integer matching the
//    * nearest column number from the user's grid system (eg. a 12 column grid system means that a
//    * 25% col width translates to the integer "3" (so does 27%))
//    */
//   const getGridSystemPercentages = (numColumns) => {
//     const step = 100 / numColumns;
//     const result = [];
//     for (let i = 1; i <= numColumns; i++) {
//       result.push(parseFloat((step * i).toFixed(3)));
//     }
//     return result;
//   };
//   const gridWidths = getGridSystemPercentages(gridSystemNumColumns);
//   /**
//    * find closest matching col-span value for each column percentage width:
//    */
//   const gridSystemColumnSpans = columnWidths.map((colWidth) => {
//     let lastDiff = 101;
//     let colSpan = gridSystemNumColumns / 2; // default to 50% column span
//     for (let i = 0; i < gridWidths.length; i++) {
//       let gridWidth = gridWidths[i];
//       // if we find an exact match, that makes our life easy:
//       if (colWidth == gridWidth) {
//         return i + 1;
//       }
//       // otherwise, we search for the closest grid column match:
//       let diff = Math.abs(gridWidth - colWidth);
//       if (diff < lastDiff) colSpan = i + 1;
//       else if (diff > lastDiff) break; // we're getting farther from the closest grid col width, so we know we already found the closest and can therefore break out of the loop
//       lastDiff = diff;
//     }
//     return colSpan;
//   });
//   return gridSystemColumnSpans;
// };
