"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripHtml = void 0;
// Strips HTML Tags from a string, which is helpful in certain cases such as when a headless CMS passes HTML over its API rather than raw text
function stripHtml(htmlString) {
    return (htmlString?.replace(/<[^>]*>?/gm, "").replaceAll("&#8217;", "'") ??
        htmlString);
}
exports.stripHtml = stripHtml;
