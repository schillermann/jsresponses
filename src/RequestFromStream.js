import { RequestHeaderFromStream } from './RequestHeaderFromStream.js';
import { RequestBodyFromStream } from './RequestBodyFromStream.js';
import { RequestLineFromStream } from './RequestLineFromStream.js';

/**
 * Request from stream (IncomingMessage).
 * @param {import('http').IncomingMessage} message Incoming message
 * @returns {import('./Request.js').Request} Request
 */
export function RequestFromStream(message) {
  return Object.freeze({
    requestLine() {
      return RequestLineFromStream(message);
    },
    header(name) {
      return RequestHeaderFromStream(message, name);
    },
    body() {
      return RequestBodyFromStream(message);
    }
  });
}
