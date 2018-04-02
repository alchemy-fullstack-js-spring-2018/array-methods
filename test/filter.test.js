const assert = require('assert');
const filter = require('../lib/filter');

describe('filter', () => {
    const isEqual = x => x === 0;
    it('returns false no elements match', () => {
        const arr = [1, 2, 3, 4];
        const hasEqual = filter(arr, isEqual);
        assert.equal(hasEqual, false);
    });
});