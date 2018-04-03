const assert = require('assert');
const map = require('../lib/map');

describe('map', () => {
    const addOne = x => x + 1;
    const originalArray = [1, 2, 3, 4, 5];
    const newArray = map(originalArray, addOne);

    it('returns an array', () => {
        const arrayTest = Array.isArray(newArray);
        assert.equal(arrayTest, true);
    });

    it('returns an array of the same length', () => {
        const arrayLengthTest = originalArray.length === newArray.length;
        assert.equal(arrayLengthTest, true);
    });
});