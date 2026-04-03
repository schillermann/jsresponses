/**
 * Fork based on path.
 * @param {string} path The path to match
 * @param {import('./Response.js').Response} res Response to return
 * @returns {import('./Fork.js').Fork} Fork
 */
export function ForkPath(path, res) {
  return Object.freeze({
    matches(request) {
      return request.requestLine().path() === path;
    },
    response(request) {
      return res;
    }
  });
}
