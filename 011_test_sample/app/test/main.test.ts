import assert from 'power-assert';
import TestTarget from '../src/main';

describe("TestTarget", () => {
    it("should have a name", () => {
        let testTarget = new TestTarget("test");
        assert.equal(testTarget.name, "test");
    });
});

