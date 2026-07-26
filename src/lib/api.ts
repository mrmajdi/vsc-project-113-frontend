// @vsc repo:vsc-project-113-frontend file:src/lib/api.ts task:f5-src-lib-api-ts module:frontend session:113
/**
 * SWR fetcher wrapper for the backend API.
 * @param endpoint - Relative path (e.g., '/api/clocks') to append to base URL.
 * @returns Parsed JSON response data.
 * @throws Error with status text if the response is not ok.
 */
export const fetcher = <T>(endpoint: string): Promise<T> => {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:5000/api';
  const url = `${base}${endpoint}`;

  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<T>;
  });
};
