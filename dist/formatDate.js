"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
/**
 * A little helper to prettify date strings for human readability
 */
function formatDate(props) {
    const { dateTime, locales = null, options = null, } = typeof props == "string" ? { dateTime: props } : props;
    return new Date(dateTime).toLocaleDateString(locales ?? "en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
        ...options,
    });
}
exports.formatDate = formatDate;
