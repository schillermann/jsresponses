/**
 * Port.
 * @param {Object} env Environment variables
 * @param {number} defaultPort Default port
 * @returns {Object} Port object
 */
export function Port(env = process.env, defaultPort = 8080) {
  return Object.freeze({
    /**
     * Convert it to number.
     * @returns {number} The port number
     */
    toNumber() {
      const p = env.PORT || defaultPort;
      return Number(p);
    }
  });
}
