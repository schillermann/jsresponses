/**
 * Conclusion object.
 * @param {Date} start Start time
 * @param {Date} end End time
 * @param {number} requests Total requests
 * @returns {Object} Conclusion object
 */
export function Conclusion(start, end, requests) {
  return Object.freeze({
    start,
    end,
    requests,
  });
}
