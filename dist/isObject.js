export function isObject(item) {
    return (item &&
        typeof item === "object" &&
        !Array.isArray(item) &&
        !(item instanceof Function));
}
export function isEmptyObject(obj) {
    return isObject(obj) && Object.keys(obj).length === 0;
}
