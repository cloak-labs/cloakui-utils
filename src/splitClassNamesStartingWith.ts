/**
 * Like `extractClassNamesStartingWith`, but returns a tuple of:
 * - [0]: extracted classNames string (matching any prefix)
 * - [1]: the remaining classNames string (original minus extracted)
 *
 * @example splitClassNamesStartingWith("text-medium text-root bg-root", ["text-"]); // returns ["text-medium text-root", "bg-root"]
 */
export const splitClassNamesStartingWith = (
    classes: string,
    prefixes: string[]
  ): [string, string] => {
    const extracted: string[] = [];
    const remaining: string[] = [];
  
    for (const className of classes?.split(" ") ?? []) {
      if (prefixes?.some((prefix) => className.startsWith(prefix))) {
        extracted.push(className);
      } else {
        remaining.push(className);
      }
    }
  
    return [extracted.join(" "), remaining.join(" ")];
  };