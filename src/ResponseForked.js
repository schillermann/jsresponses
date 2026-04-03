/**
 * Forked response.
 * @param {import('./Request.js').Request} request Request
 * @param {import('./Response.js').Response} fallback Fallback response
 * @param {...import('./Fork.js').Fork} forks Forks
 * @returns {import('./Response.js').Response} Response
 */
export function ResponseForked(request, fallback, ...forks) {
  return Object.freeze({
    media(media) {
      let found = false;
      for (const fork of forks) {
        if (fork.matches(request)) {
          fork.response(request).media(media);
          found = true;
          break;
        }
      }
      if (!found) {
        fallback.media(media);
      }
    }
  });
}
