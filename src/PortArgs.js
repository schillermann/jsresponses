/**
 * Port from command-line arguments.
 * @param {import('./Port.js').Port} origin Origin port
 * @param {Object} args Command-line arguments
 * @returns {import('./Port.js').Port} Port object
 */
export function PortArgs(origin, args = process.argv) {
  return Object.freeze({
    /**
     * The value.
     * @returns {number} The port number
     */
    value() {
      const arg = args.find(a => a.startsWith('--port='));
      return arg ? Number(arg.split('=')[1]) : origin.value();
    }
  });
}
