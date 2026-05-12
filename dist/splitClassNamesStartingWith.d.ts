/**
 * Like `extractClassNamesStartingWith`, but returns a tuple of:
 * - [0]: extracted classNames string (matching any prefix)
 * - [1]: the remaining classNames string (original minus extracted)
 *
 * @example splitClassNamesStartingWith("text-medium text-root bg-root", ["text-"]); // returns ["text-medium text-root", "bg-root"]
 */
export declare const splitClassNamesStartingWith: (classes: string, prefixes: string[]) => [string, string];
//# sourceMappingURL=splitClassNamesStartingWith.d.ts.map