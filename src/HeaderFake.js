/**
 * Fake header for testing.
 * @param {string} name Header name
 * @param {string} value Header value
 * @returns {import('./Header.js').Header} Header
 */
export function HeaderFake(name = '', value = '') {
  return Object.freeze({
    name: () => name,
    value: () => value
  });
}
