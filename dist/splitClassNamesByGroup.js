/**
 * Splits a class string by extracting classes from specified groups (i.e. classes wrapped in parentheses
 * like `subtitle(mt-2 pb-4)`) and returning the regular classes and the extracted group classes.
 *
 * @param classString - The space-separated class string to extract from
 * @param groupNames - The names of the groups to extract classes from
 * @returns An array where the first element contains the regular classes, followed by the extracted group classes
 *
 * @example
 * splitClassNamesByGroup("flex bg-red image(mt-2) item(pb-4)", "image", "item")
 *   --> Returns ["flex bg-red", "mt-2", "pb-4"]
 */
export function splitClassNamesByGroup(classString, ...groupNames) {
    let remainingClasses = classString;
    const groupClasses = [];
    for (const groupName of groupNames) {
        const regex = new RegExp(`${groupName}\\(([^)]+)\\)`, "g");
        const match = regex.exec(remainingClasses);
        if (match && match[1]) {
            groupClasses.push(match[1].trim());
            // Remove the group pattern from the remaining string
            remainingClasses = remainingClasses.replace(match[0], "").trim();
        }
        else {
            groupClasses.push("");
        }
    }
    // Clean up any double spaces that might have been created
    remainingClasses = remainingClasses.replace(/\s+/g, " ").trim();
    return [remainingClasses, ...groupClasses];
}
