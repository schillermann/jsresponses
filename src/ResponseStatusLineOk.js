import { ResponseStatusLine } from './ResponseStatusLine.js';

/**
 * Response status line 200 OK.
 * @param {import('./Response.js').Response} origin Origin response
 * @returns {import('./Response.js').Response} Response with status
 */
export function ResponseStatusLineOk(origin) {
  return ResponseStatusLine(origin, 200, 'OK');
}
