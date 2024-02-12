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
export const getGridLayoutFromColumnWidths = (percentages, maxGridCols = 12) => {
    // Normalize percentages if they don't sum to 100
    const total = percentages.reduce((sum, current) => sum + current, 0);
    percentages = percentages.map((p) => (p / total) * 100);
    // Function to find "Greatest Common Divisor" (GCD) of two numbers
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    // Utility to find GCD for an array of numbers
    const gcdArray = (arr) => arr.reduce((a, b) => gcd(a, b));
    // Scale percentages to avoid large numbers and find GCD
    const scaledPercentages = percentages.map((p) => Math.round(p * 100));
    const commonDivisor = gcdArray(scaledPercentages);
    // Calculate colSpans based on GCD, ensuring they're integers and maintain the ratio
    let colSpans = scaledPercentages.map((p) => p / commonDivisor);
    let gridCols = colSpans.reduce((a, b) => a + b, 0);
    // Reduce gridCols and colSpans if gridCols is greater than maxGridCols
    if (gridCols > maxGridCols) {
        const reductionFactor = Math.ceil(gridCols / maxGridCols);
        colSpans = colSpans.map((span) => Math.round(span / reductionFactor));
        gridCols = colSpans.reduce((a, b) => a + b, 0);
    }
    // Further adjust colSpans and gridCols to ensure the lowest possible consistent ratio
    const finalCommonDivisor = gcdArray(colSpans);
    colSpans = colSpans.map((span) => span / finalCommonDivisor);
    gridCols = colSpans.reduce((a, b) => a + b, 0);
    return { gridCols, colSpans };
};
