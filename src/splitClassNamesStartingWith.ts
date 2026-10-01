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
export function splitClassNamesStartingWith(
  classString: string,
  ...prefixGroups: ClassPrefixGroup[]
): string[] {
  if (!classString) {
    return Array(prefixGroups.length + 1).fill("");
  }

  if (typeof classString !== "string") {
    return [];
  }

  const normalizedGroups = prefixGroups.map((group) =>
    Array.isArray(group) ? group : [group],
  );
  const groups: string[][] = normalizedGroups.map(() => []);
  const remaining: string[] = [];

  for (const className of classString.trim().split(/\s+/).filter(Boolean)) {
    const groupIndex = normalizedGroups.findIndex((prefixes) =>
      prefixes.some((prefix) => className.startsWith(prefix)),
    );
    if (groupIndex !== -1) {
      groups[groupIndex].push(className);
    } else {
      remaining.push(className);
    }
  }

  return [remaining.join(" "), ...groups.map((g) => g.join(" "))];
}
