/**
 * Request body from socket.
 * @param {import('stream').Readable} socket Socket
 * @returns {import('./RequestBody.js').RequestBody} Body
 */
export function RequestBodyFromSocket(socket) {
  return Object.freeze({
    async *[Symbol.asyncIterator]() {
      for await (const chunk of socket) {
        yield chunk;
      }
    }
  });
}
