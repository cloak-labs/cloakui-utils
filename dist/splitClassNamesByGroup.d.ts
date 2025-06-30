/**
 * Splits a class string by extracting classes from specified groups (i.e. classes wrapped in parentheses
 * like `subtitle(mt-2 pb-4)`) and returning the regular classes and the extracted group classes.
 *
 * @param classString - The space-separated class string to extract from
 * @param groupNames - The names of the groups to extract classes from
 * @returns An array where the first element contains the regular classes, followed by the extracted group classes
 *
 * @example
 * splitClassNamesByGroup("flex bg-red image(mt-2) item(pb-4)", "image", "item")
 *   --> Returns ["flex bg-red", "mt-2", "pb-4"]
 */
export declare function splitClassNamesByGroup(classString: string, ...groupNames: string[]): string[];
