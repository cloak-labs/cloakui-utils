export type ClassPrefixGroup = string | string[];
/**
 * Splits a class string by extracting classes that start with the given prefixes.
 *
 * Each prefix arg is either a single prefix string, or an array of prefixes that
 * form one group (matching classes are returned as a single concatenated string).
 *
 * @param classString - The space-separated class string to extract from
 * @param prefixGroups - Prefixes (or prefix arrays) to extract classes for
 * @returns An array where the first element contains the remaining classes (no prefix match),
 *   followed by the extracted classes for each prefix group (in the same order)
 *
 * @example
 * splitClassNamesStartingWith("text-medium text-root bg-root", "text-")
 *   --> Returns ["bg-root", "text-medium text-root"]
 *
 * @example
 * splitClassNamesStartingWith("mt-4 mb-2 text-root bg-root", "mt-", "mb-")
 *   --> Returns ["text-root bg-root", "mt-4", "mb-2"]
 *
 * @example
 * splitClassNamesStartingWith("mt-4 mb-2 text-root bg-root", ["mt-", "mb-"], "text-")
 *   --> Returns ["bg-root", "mt-4 mb-2", "text-root"]
 */
export declare function splitClassNamesStartingWith(classString: string, ...prefixGroups: ClassPrefixGroup[]): string[];
//# sourceMappingURL=splitClassNamesStartingWith.d.ts.map