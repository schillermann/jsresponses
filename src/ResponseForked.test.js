import test from 'node:test';
import assert from 'node:assert';
import { ResponseForked } from './ResponseForked.js';
import { ForkPath } from './ForkPath.js';
import { RequestFake } from './RequestFake.js';
import { ResponseFake } from './ResponseFake.js';
import { MediaFake } from './MediaFake.js';

test('ResponseForked selects first matching fork', () => {
  const media = MediaFake();
  const request = RequestFake('/balance');
  const response = ResponseForked(
    request,
    ResponseFake(404),
    ForkPath('/', ResponseFake(200, 'root')),
    ForkPath('/balance', ResponseFake(200, '42'))
  );
  response.media(media);
  assert.strictEqual(media.code(), 200);
  assert.strictEqual(media.bodyContent(), '42');
});

test('ResponseForked uses fallback when no fork matches', () => {
  const media = MediaFake();
  const request = RequestFake('/unknown');
  const response = ResponseForked(
    request,
    ResponseFake(404, 'not found'),
    ForkPath('/', ResponseFake(200, 'root'))
  );
  response.media(media);
  assert.strictEqual(media.code(), 404);
  assert.strictEqual(media.bodyContent(), 'not found');
});
