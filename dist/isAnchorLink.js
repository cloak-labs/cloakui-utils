export const isAnchorLink = (url, base) => {
    if (!url || typeof url !== "string")
        return false;
    // Pure anchor (#section)
    if (url.startsWith("#"))
        return true;
    // Relative path with anchor (/page#section)
    if (url.includes("#") && url.startsWith("/"))
        return true;
    // Full URL with anchor
    try {
        const urlObj = new URL(url, base);
        return urlObj.origin === base && urlObj.hash !== "";
    }
    catch {
        return false;
    }
};
