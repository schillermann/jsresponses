/**
 * An HTTP request.
 * @typedef {Object} Request
 * @property {function(string): import('./RequestHeader.js').RequestHeader} header Get header by name
 * @property {function(): import('./RequestBody.js').RequestBody} body Get the body
 */
