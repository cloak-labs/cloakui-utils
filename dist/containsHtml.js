/**
 * The containsHtml function checks for HTML tags and HTML entities in a string.
 * It detects:
 * - HTML tags: anything that starts with <, followed by any number of characters that are not >, and then ends with >
 * - HTML entities: named entities (e.g., &nbsp;, &amp;), decimal numeric entities (e.g., &#123;), and hexadecimal entities (e.g., &#x41;)
 * Remember, this method isn't foolproof, especially for strings that might contain < or >
 * in contexts not related to HTML tags, but it's a decent start for simple needs.
 */
export const containsHtml = (str) => {
    // Regex to detect HTML tags
    const htmlTagRegex = /<[^>]*>/;
    if (htmlTagRegex.test(str))
        return true; // early return prevents unnecessary regex execution
    // Regex to detect HTML entities (named, decimal numeric, and hexadecimal)
    const htmlEntityRegex = /&(?:[a-zA-Z]+|#[0-9]+|#x[0-9a-fA-F]+);/;
    return htmlEntityRegex.test(str);
};
