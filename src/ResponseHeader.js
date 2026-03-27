/**
 * Response header.
 * @param {import('./Response.js').Response} origin Origin response
 * @param {string} name Header name
 * @param {string} value Header value
 * @returns {import('./Response.js').Response} Response with header
 */
export function ResponseHeader(origin, name, value) {
  return Object.freeze({
    media(wire) {
      origin.media(wire.header(name, value));
    }
  });
}
