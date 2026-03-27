import { ResponseHeader } from './ResponseHeader.js';

/**
 * Json Response header.
 * @param {import('./Response.js').Response} origin Origin response
 * @returns {import('./Response.js').Response} Response with header
 */
export function ResponseJsonHeader(origin) {
  return ResponseHeader(origin, 'Content-Type', 'application/json');
}
