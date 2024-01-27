/**
 * Given a string of classNames (separated by spaces), and an array of class prefixes,
 * this will extract and return the classNames that start with any of the provided prefixes.
 *
 * @example extractClassNamesStartingWith("is-style-fill is-style-secondary text-root bg-root", ["bg-"]); // returns "bg-root"
 */
export declare const extractClassNamesStartingWith: (classes: string, prefixes: string[]) => string;
