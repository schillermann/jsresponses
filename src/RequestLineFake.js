/**
 * Fake request line for testing.
 * @param {string} path Path
 * @param {string} method Method
 * @param {string} query Query
 * @param {string} protocol Protocol
 * @returns {import('./RequestLine.js').RequestLine} Request line
 */
export function RequestLineFake(path = '/', method = 'GET', query = '', protocol = 'HTTP/1.1') {
  return Object.freeze({
    method: () => method,
    path: () => path,
    query: () => query,
    protocol: () => protocol
  });
}
