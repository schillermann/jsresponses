import { ResponseStatusLine } from './ResponseStatusLine.js';

/**
 * Response with 404 status line.
 * @param {import('./Response.js').Response} response Response
 * @returns {import('./Response.js').Response} Response
 */
export function ResponseStatusLineNotFound(response) {
  return ResponseStatusLine(response, 404, 'Not Found');
}
