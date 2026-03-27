import http from 'http';
import { Port } from './Port.js';

/**
 * Front-end that listens to a port using HTTP.
 * @param {function(http.IncomingMessage, http.ServerResponse): void} socket Connection socket
 * @param {Object} port Port to listen on (must have toNumber())
 * @returns {Object} Server object
 */
export function WireFront(socket, port = Port()) {
  return Object.freeze({
    /**
     * Start it.
     */
    value() {
      const server = http.createServer((req, res) => {
        socket(req, res);
      });
      const num = port.toNumber();
      server.listen(num, () => {
        console.log(`Server is listening on ${num}`);
      });
    }
  });
}
