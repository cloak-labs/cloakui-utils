export type TDateTime = string; // todo: stricter type for machine-readable date?
export type FormatDateProps = {
  /** machine-readable/ISO datetime string */
  dateTime: TDateTime;
  locales?: Intl.LocalesArgument;
  options?: Intl.DateTimeFormatOptions;
};

/**
 * A little helper to prettify date strings for human readability
 */
export function formatDate(props: FormatDateProps) {
  const {
    dateTime,
    locales = null,
    options = null,
  } = typeof props == "string" ? { dateTime: props } : props;

  return new Date(dateTime).toLocaleDateString(locales ?? "en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
    ...options,
  });
}
