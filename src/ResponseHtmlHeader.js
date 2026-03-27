import { ResponseHeader } from './ResponseHeader.js';

/**
 * HTML Response header.
 * @param {import('./Response.js').Response} origin Origin response
 * @returns {import('./Response.js').Response} Response with header
 */
export function ResponseHtmlHeader(origin) {
  return ResponseHeader(origin, 'Content-Type', 'text/html');
}
