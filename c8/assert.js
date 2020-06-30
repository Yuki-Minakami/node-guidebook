const assert = require('assert');

assert.strictEqual(1, 1);
// OK, 1 == 1
assert.strictEqual(1, '1');
// AssertionError: 1 == '1'

assert.strictEqual(1, 2);
// AssertionError: 1 == 2
assert.strictEqual({ a: { b: 1 } }, { a: { b: 1 } });
// AssertionError: { a: { b: 1 } } == { a: { b: 1 } }