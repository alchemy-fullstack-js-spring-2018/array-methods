const assert = require('assert');
const map = require('../lib/map');

describe('map', () => {
    const addOne = x => x + 1;
    const originalArray = [1, 2, 3, 4, 5];
    const oneAddedArray = map(originalArray, addOne);

    it('returns an array', () => {
        const arrayTest = Array.isArray(oneAddedArray);
        assert.equal(arrayTest, true);
    });

    it('returns an array of the same length', () => {
        const arrayLengthTest = originalArray.length === oneAddedArray.length;
        assert.equal(arrayLengthTest, true);
    });
    
    it('returns a new array', () => {
        const noChangeArray = map(originalArray, x => x);
        const newArrayTest = originalArray === noChangeArray;
        assert.equal(newArrayTest, false);
    });
    
});