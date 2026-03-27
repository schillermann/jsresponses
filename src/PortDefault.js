/**
 * Port with default value.
 * @param {number} value Default port
 * @returns {import('./Port.js').Port} Port object
 */
export function PortDefault(value = 8080) {
  return Object.freeze({
    /**
     * The value.
     * @returns {number} The port number
     */
    value() {
      return value;
    }
  });
}
