/**
 * This function, containsHtml, uses a regex pattern that looks for anything that starts
 * with <, followed by any number of characters that are not >, and then ends with >. This
 * should match most HTML tags, giving you a basic way to check for HTML content in a string.
 * Remember, this method isn't foolproof, especially for strings that might contain < or >
 * in contexts not related to HTML tags, but it's a decent start for simple needs.
 */
export declare const containsHtml: (str: string) => boolean;
