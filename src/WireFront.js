import http from 'http';

/**
 * Front-end that listens to a port using HTTP.
 * @param {function(http.IncomingMessage, http.ServerResponse): void} handle Connection handler
 * @returns {Object} Server object
 */
export function WireFront(handle) {
  return Object.freeze({
    /**
     * Start it.
     */
    value() {
      const server = http.createServer((req, res) => {
        handle(req, res);
      });
      server.listen(8080, () => {
        console.log('Server is listening on 8080');
      });
    }
  });
}
