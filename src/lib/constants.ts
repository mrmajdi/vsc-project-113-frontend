// @vsc repo:vsc-project-113-frontend file:src/lib/constants.ts task:f5-src-lib-constants-ts module:frontend session:113

/**
 * Shared constants matching the backend contract.
 */

/**
 * API route paths used by the frontend SWR fetcher.
 */
export const ApiRoutes = {
  Health: '/api/health',
  Clocks: '/api/clocks',
} as const;

/**
 * Time format string per the shared contract.
 */
export const TimeFormat = 'HH:mm:ss';
