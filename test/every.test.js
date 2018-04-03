const assert = require('assert');
const every = require('../lib/every');

describe('every', () => {
    it('returns true if every item in array is below 20', () => {
        const belowTwenty = x => x < 20;
        const arr = [2, 3, 5, 6, 8];
        const isBelowTwenty = every(arr, belowTwenty);
        assert.equal(isBelowTwenty, true);
    });
    it('returns false if every item isn\'t below 10', () => {
        const belowTen = x => x < 10;
        const arr = [2, 5, 7, 8, 10, 14];
        const isBelowTen = every(arr, belowTen);
        assert.equal(isBelowTen, false);
    });
});