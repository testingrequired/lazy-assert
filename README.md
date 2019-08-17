# @testingrequired/lazy-assert

A lazy wrapper around Node's `assert` module.

## Install

```bash
$ npm i -D @testingrequired/lazy-assert
```

## Why?

Lazy assertions are essential for building multi assert assertions.

```javascript
import assert from "@testingrequired/lazy-assert";

const point = {
  y: 10
};

// Creating assertions doesn't run them
const asserts = [
  assert(point.x, "x not defined", assert(point.y, "y not defined"))
];

// This is where those assertions will be called
multiAssert(...asserts);

// An example multi assert implementation
function multiAssert(...asserts) {
  const errors = asserts
    .map(a => {
      try {
        a.call(null);
      } catch (e) {
        return e;
      }
    })
    .filter(x => x);

  assert.fail(errors);
}
```

##
