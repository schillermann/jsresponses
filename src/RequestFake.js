import { RequestLineFake } from './RequestLineFake.js';
import { HeaderFake } from './HeaderFake.js';
import { BodyFake } from './BodyFake.js';

/**
 * Fake request for testing.
 * @param {string} path Path
 * @param {string} method Method
 * @param {string} body Body content
 * @param {Object} headers Headers
 * @param {string} query Query
 * @param {string} protocol Protocol
 * @returns {import('./Request.js').Request} Request
 */
export function RequestFake(path = '/', method = 'GET', body = '', headers = {}, query = '', protocol = 'HTTP/1.1') {
  return Object.freeze({
    requestLine() {
      return RequestLineFake(path, method, query, protocol);
    },
    header(name) {
      return HeaderFake(name, headers[name] || '');
    },
    body() {
      return BodyFake(body);
    }
  });
}
