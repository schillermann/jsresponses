import http from 'http';
import { PortFallback } from './PortFallback.js';

/**
 * Front-end that listens to a port using HTTP.
 * @param {function(import('http').IncomingMessage, import('http').ServerResponse): void} socket Connection socket
 * @param {import('./Port.js').Port} port Port to listen on (must have value())
 * @returns {Object} Server object
 */
export function WireFront(socket, port = PortFallback()) {
  return Object.freeze({
    /**
     * Start it.
     */
    value() {
      const server = http.createServer((req, res) => {
        socket(req, res);
      });
      const num = port.value();
      server.listen(num, () => {
        console.log(`Server is listening on ${num}`);
      });
    }
  });
}
