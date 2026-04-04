/**
 * Media for HTTP response.
 * @param {import('http').ServerResponse} out Server response
 * @returns {import('./Media.js').Media} Media
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
