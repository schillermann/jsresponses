/**
 * Fake media for testing.
 * @param {Object} state Internal state
 * @returns {import('./Media.js').Media & { code: function(): number, bodyContent: function(): string }} Media
 */
export function FakeMedia(state = { code: 0, headers: {}, body: '' }) {
  return Object.freeze({
    status(code, message) {
      state.code = code;
      return FakeMedia(state);
    },
    header(name, value) {
      state.headers[name] = value;
      return FakeMedia(state);
    },
    body(content) {
      state.body = content;
      return FakeMedia(state);
    },
    code() {
      return state.code;
    },
    bodyContent() {
      return state.body;
    }
  });
}
