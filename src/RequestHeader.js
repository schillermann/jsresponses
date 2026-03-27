/**
 * Header of the request.
 * @param {import('http').IncomingMessage} socket Socket
 * @param {string} name Header name
 * @returns {import('./Header.js').Header} Header
 */
export function RequestHeader(socket, name) {
  return Object.freeze({
    value() {
      const val = socket.headers[name.toLowerCase()];
      if (!val) {
        throw new Error(`Header '${name}' is missing`);
      }
      return Array.isArray(val) ? val[0] : val;
    }
  });
}
