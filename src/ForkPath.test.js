import test from 'node:test';
import assert from 'node:assert';
import { ForkPath } from './ForkPath.js';
import { RequestFake } from './RequestFake.js';
import { ResponseFake } from './ResponseFake.js';

test('ForkPath matches correct path', () => {
  const fork = ForkPath('/home', ResponseFake());
  assert.strictEqual(fork.matches(RequestFake('/home')), true);
});

test('ForkPath does not match incorrect path', () => {
  const fork = ForkPath('/home', ResponseFake());
  assert.strictEqual(fork.matches(RequestFake('/about')), false);
});

test('ForkPath returns correct response', () => {
  const response = ResponseFake(200, 'hello');
  const fork = ForkPath('/home', response);
  assert.strictEqual(fork.response(RequestFake('/home')), response);
});
