export type TDateTime = string;
export type FormatDateProps = {
    /** machine-readable/ISO datetime string */
    dateTime: TDateTime;
    locales?: Intl.LocalesArgument;
    options?: Intl.DateTimeFormatOptions;
};
/**
 * A little helper to prettify date strings for human readability
 */
export declare function formatDate(props: FormatDateProps): string;
