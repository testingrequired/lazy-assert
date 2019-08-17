const assert = jest.fn();

assert.deepEqual = jest.fn();
assert.deepStrictEqual = jest.fn();
assert.doesNotThrow = jest.fn();
assert.equal = jest.fn();
assert.fail = jest.fn();
assert.notDeepEqual = jest.fn();
assert.notEqual = jest.fn();
assert.strictEqual = jest.fn();
assert.throws = jest.fn();
assert.ok = jest.fn();

module.exports = assert;
