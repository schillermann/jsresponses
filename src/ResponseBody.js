/**
 * Response body.
 * @param {string|Buffer} body Body content
 * @returns {import('./Response.js').Response} Response with body
 */
export function ResponseBody(body) {
  return Object.freeze({
    media(wire) {
      wire.body(body);
    }
  });
}
