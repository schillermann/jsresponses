/**
 * Fake media for testing.
 * @param {Object} state Internal state
 * @returns {import('./Media.js').Media & { code: function(): number, bodyContent: function(): string }} Media
 */
export function MediaFake(state = { code: 0, headers: {}, body: '' }) {
  return Object.freeze({
    status(code, message) {
      state.code = code;
      return MediaFake(state);
    },
    header(name, value) {
      state.headers[name] = value;
      return MediaFake(state);
    },
    body(content) {
      state.body = content;
      return MediaFake(state);
    },
    code() {
      return state.code;
    },
    bodyContent() {
      return state.body;
    }
  });
}
