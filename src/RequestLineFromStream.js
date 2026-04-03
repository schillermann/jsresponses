/**
 * Request line from stream (IncomingMessage).
 * @param {import('http').IncomingMessage} message Incoming message
 * @returns {import('./RequestLine.js').RequestLine} RequestLine
 */
export function RequestLineFromStream(message) {
  return Object.freeze({
    method() {
      return message.method;
    },
    path() {
      return message.url.split('?')[0];
    },
    query() {
      const parts = message.url.split('?');
      return parts.length > 1 ? parts[1] : '';
    },
    protocol() {
      return `HTTP/${message.httpVersion}`;
    }
  });
}
