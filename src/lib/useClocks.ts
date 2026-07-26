// @vsc repo:vsc-project-113-frontend file:src/lib/useClocks.ts task:f5-src-lib-useclocks-ts module:frontend session:113
import useSWR from 'swr';
import { fetcher } from './api';
import { ApiRoutes } from './constants';
import type { Capital } from './types';

/**
 * SWR hook that fetches the list of capitals from the backend.
 *
 * @returns SWR response object containing an array of Capital objects.
 */
export function useClocks() {
  return useSWR<Capital[]>(ApiRoutes.Clocks, fetcher);
}
