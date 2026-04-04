import test from 'node:test';
import assert from 'node:assert';
import { ResponseForked } from './ResponseForked.js';
import { ForkPath } from './ForkPath.js';
import { FakeRequest } from './FakeRequest.js';
import { FakeResponse } from './FakeResponse.js';
import { FakeMedia } from './FakeMedia.js';

test('ResponseForked selects first matching fork', () => {
  const media = FakeMedia();
  const request = FakeRequest('/balance');
  const response = ResponseForked(
    request,
    FakeResponse(404),
    ForkPath('/', FakeResponse(200, 'root')),
    ForkPath('/balance', FakeResponse(200, '42'))
  );
  response.media(media);
  assert.strictEqual(media.code(), 200);
  assert.strictEqual(media.bodyContent(), '42');
});

test('ResponseForked uses fallback when no fork matches', () => {
  const media = FakeMedia();
  const request = FakeRequest('/unknown');
  const response = ResponseForked(
    request,
    FakeResponse(404, 'not found'),
    ForkPath('/', FakeResponse(200, 'root'))
  );
  response.media(media);
  assert.strictEqual(media.code(), 404);
  assert.strictEqual(media.bodyContent(), 'not found');
});
