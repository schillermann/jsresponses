import test from 'node:test';
import assert from 'node:assert';
import { ForkPath } from './ForkPath.js';
import { FakeRequest } from './FakeRequest.js';
import { FakeResponse } from './FakeResponse.js';

test('ForkPath matches correct path', () => {
  const fork = ForkPath('/home', FakeResponse());
  assert.strictEqual(fork.matches(FakeRequest('/home')), true);
});

test('ForkPath does not match incorrect path', () => {
  const fork = ForkPath('/home', FakeResponse());
  assert.strictEqual(fork.matches(FakeRequest('/about')), false);
});

test('ForkPath returns correct response', () => {
  const response = FakeResponse(200, 'hello');
  const fork = ForkPath('/home', response);
  assert.strictEqual(fork.response(FakeRequest('/home')), response);
});
