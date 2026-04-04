/**
 * Fake response for testing.
 * @param {number} code Status code
 * @param {string} body Body
 * @returns {import('./Response.js').Response} Response
 */
export function FakeResponse(code = 200, body = '') {
  return Object.freeze({
    media(m) {
      m.status(code).body(body);
    }
  });
}
