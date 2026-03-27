/**
 * Response with status line.
 * @param {import('./Response.js').Response} origin Origin response
 * @param {number} code Status code
 * @param {string} reason Reason phrase
 * @returns {import('./Response.js').Response} Response with status
 */
export function ResponseStatusLine(origin, code, reason) {
  return Object.freeze({
    media(wire) {
      origin.media(wire.status(code, reason));
    }
  });
}
