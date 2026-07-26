// @vsc repo:vsc-project-113-frontend file:src/lib/timeUtils.ts task:f5-src-lib-timeutils-ts module:frontend session:113
export /**
 * Formats a given date as HH:mm:ss in the specified IANA timezone.
 * Uses Intl.DateTimeFormat with locale 'en-US' to ensure Western Arabic numerals.
 *
 * @param date - The date to format.
 * @param timeZone - IANA timezone string (e.g., 'Asia/Tehran').
 * @returns Formatted time string in 24-hour format.
 */
function formatTimeInZone(date: Date, timeZone: string): string {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone,
  }).format(date);
}

/**
 * Returns the current time in Tehran (or provided date) formatted as HH:mm:ss.
 *
 * @param date - Optional date to format; defaults to now.
 * @returns Formatted Tehran time string.
 */
export function formatTehranTime(date?: Date): string {
  return formatTimeInZone(date ?? new Date(), 'Asia/Tehran');
}

/**
 * Formats the given date (or now) in the capital's timezone.
 *
 * @param capital - Object containing at least a `timezone` property.
 * @param date - Optional date to format; defaults to now.
 * @returns Formatted local time string for the capital.
 */
export function formatCapitalTime(capital: { timezone: string }, date?: Date): string {
  return formatTimeInZone(date ?? new Date(), capital.timezone);
}

/**
 * Returns the offsetMinutes property from a capital object.
 * If offsetMinutes is missing or undefined, returns 0 for compatibility with mock data.
 *
 * @param capital - Object that may contain an `offsetMinutes` property.
 * @returns Offset in minutes from UTC.
 */
export function getCapitalOffsetMinutes(capital: { offsetMinutes?: number }): number {
  return capital.offsetMinutes ?? 0;
}
