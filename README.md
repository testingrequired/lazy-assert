# @testingrequired/lazy-assert

A lazy wrapper around Node's `assert` module.

## Install

```bash
$ npm i -D @testingrequired/lazy-assert
```

## Usage

```javascript
import assert from "@testingrequired/lazy-assert";

assert(1 === 2, "They don't equal"); // Returns a function

assert(1 === 2, "They don't equal")(); // Runs assertion
```

## Why?

Lazy assertions are essential for building something like multi assert assertions.

```javascript
import assert from "@testingrequired/lazy-assert";

const point = {
  y: 10
};

// Creating assertions doesn't run them
const asserts = [
  assert(point.x, "x not defined", assert(point.y, "y not defined"))
];

// Some multi assert implementation
multiAssert(...asserts, "Something is wrong");
```
