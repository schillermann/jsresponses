/**
 * Fake request for testing.
 * @param {string} path Path
 * @param {string} method Method
 * @returns {import('./Request.js').Request} Request
 */
export function FakeRequest(path = '/', method = 'GET') {
  return Object.freeze({
    requestLine() {
      return Object.freeze({
        path: () => path,
        method: () => method,
        query: () => '',
        protocol: () => 'HTTP/1.1'
      });
    },
    header(name) {
      return Object.freeze({
        name: () => name,
        value: () => ''
      });
    },
    body() {
      return Object.freeze({
        read: async () => Buffer.alloc(0)
      });
    }
  });
}
