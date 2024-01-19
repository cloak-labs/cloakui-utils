// Strips HTML Tags from a string, which is helpful in certain cases such as when a headless CMS passes HTML over its API rather than raw text
export function stripHtml(htmlString: string) {
  return (
    htmlString?.replace(/<[^>]*>?/gm, "").replaceAll("&#8217;", "'") ??
    htmlString
  );
}
