/**
 * Given a string of classNames (separated by spaces), and an array of class prefixes,
 * this will return the classNames excluding any that start with any of the provided prefixes.
 *
 * @example excludeClassesStartingWith("is-style-fill is-style-secondary text-root bg-root", ["is-style-", "bg-"]); // returns "text-root"
 */
export const excludeClassNamesStartingWith = (classes, excludePrefixes) => classes
    ?.split(" ")
    ?.filter((className) => !excludePrefixes?.some((prefix) => className.startsWith(prefix)))
    ?.join(" ") ?? "";
