const assert = require("assert");
const lazyAssert = require("./index").default;

jest.mock("assert");

describe("lazyAssert", () => {
  const args = [jest.fn(), jest.fn()];

  beforeEach(() => {
    assert.mockReset();
  });

  it("should not execute assertion on creation", () => {
    lazyAssert(...args);
    expect(assert).not.toHaveBeenCalled();
  });

  it("should execution assertion when calling returned function", () => {
    lazyAssert(...args)();
    expect(assert).toHaveBeenCalledWith(...args);
  });

  describe("deepEqual", () => {
    it("should not execute assertion on creation", () => {
      lazyAssert.deepEqual(...args);
      expect(assert.deepEqual).not.toHaveBeenCalled();
    });

    it("should execution assertion when calling returned function", () => {
      lazyAssert.deepEqual(...args)();
      expect(assert.deepEqual).toHaveBeenCalledWith(...args);
    });
  });

  describe("deepStrictEqual", () => {
    it("should not execute assertion on creation", () => {
      lazyAssert.deepStrictEqual(...args);
      expect(assert.deepStrictEqual).not.toHaveBeenCalled();
    });

    it("should execution assertion when calling returned function", () => {
      lazyAssert.deepStrictEqual(...args)();
      expect(assert.deepStrictEqual).toHaveBeenCalledWith(...args);
    });
  });

  describe("doesNotThrow", () => {
    it("should not execute assertion on creation", () => {
      lazyAssert.doesNotThrow(...args);
      expect(assert.doesNotThrow).not.toHaveBeenCalled();
    });

    it("should execution assertion when calling returned function", () => {
      lazyAssert.doesNotThrow(...args)();
      expect(assert.doesNotThrow).toHaveBeenCalledWith(...args);
    });
  });

  describe("equal", () => {
    it("should not execute assertion on creation", () => {
      lazyAssert.equal(...args);
      expect(assert.equal).not.toHaveBeenCalled();
    });

    it("should execution assertion when calling returned function", () => {
      lazyAssert.equal(...args)();
      expect(assert.equal).toHaveBeenCalledWith(...args);
    });
  });

  describe("fail", () => {
    it("should not execute assertion on creation", () => {
      lazyAssert.fail(...args);
      expect(assert.fail).not.toHaveBeenCalled();
    });

    it("should execution assertion when calling returned function", () => {
      lazyAssert.fail(...args)();
      expect(assert.fail).toHaveBeenCalledWith(...args);
    });
  });

  describe("notDeepEqual", () => {
    it("should not execute assertion on creation", () => {
      lazyAssert.notDeepEqual(...args);
      expect(assert.notDeepEqual).not.toHaveBeenCalled();
    });

    it("should execution assertion when calling returned function", () => {
      lazyAssert.notDeepEqual(...args)();
      expect(assert.notDeepEqual).toHaveBeenCalledWith(...args);
    });
  });

  describe("notEqual", () => {
    it("should not execute assertion on creation", () => {
      lazyAssert.notEqual(...args);
      expect(assert.notEqual).not.toHaveBeenCalled();
    });

    it("should execution assertion when calling returned function", () => {
      lazyAssert.notEqual(...args)();
      expect(assert.notEqual).toHaveBeenCalledWith(...args);
    });
  });

  describe("strictEqual", () => {
    it("should not execute assertion on creation", () => {
      lazyAssert.strictEqual(...args);
      expect(assert.strictEqual).not.toHaveBeenCalled();
    });

    it("should execution assertion when calling returned function", () => {
      lazyAssert.strictEqual(...args)();
      expect(assert.strictEqual).toHaveBeenCalledWith(...args);
    });
  });

  describe("throws", () => {
    it("should not execute assertion on creation", () => {
      lazyAssert.throws(...args);
      expect(assert.throws).not.toHaveBeenCalled();
    });

    it("should execution assertion when calling returned function", () => {
      lazyAssert.throws(...args)();
      expect(assert.throws).toHaveBeenCalledWith(...args);
    });
  });

  describe("ok", () => {
    it("should not execute assertion on creation", () => {
      lazyAssert.ok(...args);
      expect(assert.ok).not.toHaveBeenCalled();
    });

    it("should execution assertion when calling returned function", () => {
      lazyAssert.ok(...args)();
      expect(assert.ok).toHaveBeenCalledWith(...args);
    });
  });
});

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
