const assert = require('assert');
const map = require('../lib/map');

describe('map', () => {
    const addOne = x => x + 1;
    const originalArray = [1, 2, 3, 4, 5];
    it('returns a array', () => {
        const newArray = map(originalArray, addOne);
        assert.equal(Array.isArray(newArray), true);
    });
});