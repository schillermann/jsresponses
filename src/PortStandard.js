import { PortDefault } from './PortDefault.js';
import { PortEnv } from './PortEnv.js';
import { PortArgs } from './PortArgs.js';

/**
 * Standard port composition.
 * @param {number} defaultPort Default port
 * @param {Object} env Environment variables
 * @param {Array} args CLI arguments
 * @returns {import('./Port.js').Port} Port object
 */
export function PortStandard(defaultPort = 8080, env = process.env, args = process.argv) {
  return PortArgs(
    PortEnv(
      PortDefault(defaultPort),
      env
    ),
    args
  );
}
