/**
 * HTTP response media.
 * @typedef {Object} Media
 * @property {function(number, string): Media} status Set status
 * @property {function(string, string): Media} header Set header
 * @property {function(any): Media} body Set body
 */

/**
 * Media for HTTP response.
 * @param {import('http').ServerResponse} out Server response
 * @returns {Object} Media
 */
export function WireMedia(out) {
  return Object.freeze({
    status(code, message) {
      out.statusCode = code;
      out.statusMessage = message;
      return WireMedia(out);
    },
    header(name, value) {
      out.setHeader(name, value);
      return WireMedia(out);
    },
    body(content) {
      out.end(content);
      return WireMedia(out);
    }
  });
}
