const assert = require('assert');
const reduce = require('../lib/reduce');

describe('reduce', () => {
    const originalArray = [1, 2, 3];
    const callback = (accumulator, x) => accumulator + x;

    it('adds numerical elements of an array when an initial value of zero is provided', () => {
        const arraySum = reduce(originalArray, callback, 0);
        assert.equal(arraySum, 6);
    });

    it('adds numerical elements of an array to an initial value', () => {
        const arraySum = reduce(originalArray, callback, 100);
        assert.equal(arraySum, 106);
    });
 
});