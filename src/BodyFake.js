/**
 * Fake body for testing.
 * @param {string} content Body content
 * @returns {import('./Body.js').Body} Body
 */
export function BodyFake(content = '') {
  return Object.freeze({
    async *[Symbol.asyncIterator]() {
      yield Buffer.from(content);
    }
  });
}
