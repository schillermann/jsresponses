import { ResponseHeader } from './ResponseHeader.js';

/**
 * Text Response header.
 * @param {import('./Response.js').Response} origin Origin response
 * @returns {import('./Response.js').Response} Response with header
 */
export function ResponseTextHeader(origin) {
  return ResponseHeader(origin, 'Content-Type', 'text/plain');
}
