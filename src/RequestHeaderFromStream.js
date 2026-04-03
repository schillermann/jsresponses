/**
 * Header of the request from stream.
 * @param {import('http').IncomingMessage} message Incoming message
 * @param {string} name Header name
 * @returns {import('./RequestHeader.js').RequestHeader} Header
 */
export function RequestHeaderFromStream(message, name) {
  return Object.freeze({
    value() {
      const val = message.headers[name.toLowerCase()];
      if (!val) {
        throw new Error(`Header '${name}' is missing`);
      }
      return Array.isArray(val) ? val[0] : val;
    }
  });
}
