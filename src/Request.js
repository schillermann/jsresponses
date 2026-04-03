/**
 * An HTTP request.
 * @typedef {Object} Request
 * @property {function(): import('./RequestLine.js').RequestLine} requestLine Get the request line
 * @property {function(string): import('./Header.js').Header} header Get header by name
 * @property {function(): import('./Body.js').Body} body Get the body
 */
