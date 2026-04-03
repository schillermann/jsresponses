import { RequestBodyText } from './RequestBodyText.js';

/**
 * Body of the request as JSON.
 * @param {import('./Request.js').Request} request Original request
 * @returns {Object} JSON value
 */
export function RequestBodyJson(request) {
  return Object.freeze({
    /**
     * Get the body as JSON.
     * @returns {Promise<Object>} JSON body
     */
    async value() {
      const text = await RequestBodyText(request).value();
      return JSON.parse(text);
    }
  });
}
