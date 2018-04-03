const assert = require('assert');
const filter = require('../lib/filter');

describe('filter', () => {
    const isZero = x => x === 0;
    it('returns false no elements match', () => {
        const arr = [1, 2, 3, 4];
        const hasZero = filter(arr, isZero);
        assert.deepEqual(hasZero, []);
    }),
    it('returns true if one element matches', () => {
        const arr = [1, 0, 3, 4];
        const hasZero = filter(arr, isZero);
        assert.deepEqual(hasZero, [0]);
    }),
    it('returns true if more than one element matches', () => {
        const arr = [1, 0, 3, 0];
        const hasZero = filter(arr, isZero);
        assert.deepEqual(hasZero, [0, 0]);
    });
});