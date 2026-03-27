import { RequestHeader } from './RequestHeader.js';
import { RequestBodyFromSocket } from './RequestBodyFromSocket.js';

/**
 * Request from socket (IncomingMessage).
 * @param {import('http').IncomingMessage} socket Socket
 * @returns {import('./Request.js').Request} Request
 */
export function RequestFromSocket(socket) {
  return Object.freeze({
    header(name) {
      return RequestHeader(socket, name);
    },
    body() {
      return RequestBodyFromSocket(socket);
    }
  });
}
