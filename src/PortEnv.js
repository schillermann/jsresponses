/**
 * Port from environment variable.
 * @param {import('./Port.js').Port} origin Origin port
 * @param {Object} env Environment variables
 * @returns {import('./Port.js').Port} Port object
 */
export function PortEnv(origin, env = process.env) {
  return Object.freeze({
    /**
     * The value.
     * @returns {number} The port number
     */
    value() {
      return Number(env.PORT || origin.value());
    }
  });
}
