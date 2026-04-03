/**
 * Request body from stream.
 * @param {import('stream').Readable} stream Stream
 * @returns {import('./RequestBody.js').RequestBody} Body
 */
export function RequestBodyFromStream(stream) {
  return Object.freeze({
    async *[Symbol.asyncIterator]() {
      for await (const chunk of stream) {
        yield chunk;
      }
    }
  });
}
