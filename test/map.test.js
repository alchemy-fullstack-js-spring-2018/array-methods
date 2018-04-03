const assert = require('assert');
const map = require('../lib/map');

describe('map', () => {
    const square = x => x * x;
    it('returns new array with squared numbers', () => {
        const arr = [2, 6, 6, 8];
        const squared = map(arr, square);
        assert.deepEqual(squared, [4, 36, 36, 64]);
    });

});