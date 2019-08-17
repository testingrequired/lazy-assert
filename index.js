const assert = require("assert");

const lazy = fn => (...args) => () => fn(...args);

const lazyAssert = lazy(assert);

lazyAssert.equal = lazy(assert.equal);
lazyAssert.notEqual = lazy(assert.notEqual);
lazyAssert.strictEqual = lazy(assert.strictEqual);
lazyAssert.deepEqual = lazy(assert.deepEqual);
lazyAssert.notDeepEqual = lazy(assert.notDeepEqual);
lazyAssert.deepStrictEqual = lazy(assert.deepStrictEqual);
lazyAssert.throws = lazy(assert.throws);
lazyAssert.doesNotThrow = lazy(assert.doesNotThrow);
lazyAssert.fail = lazy(assert.fail);
lazyAssert.ok = lazy(assert.ok);

Object.defineProperty(exports, "__esModule", {
  value: true
});

module.exports.default = lazyAssert;
