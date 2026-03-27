/**
 * Body of the request as text.
 * @param {import('./Request.js').Request} request Original request
 * @returns {Object} String value
 */
export function RequestBodyText(request) {
  return Object.freeze({
    /**
     * Get the body as text.
     * @returns {Promise<string>} Text body
     */
    async value() {
      const chunks = [];
      const body = request.body();
      for await (const chunk of body) {
        chunks.push(chunk);
      }
      return Buffer.concat(chunks).toString('utf-8');
    }
  });
}
