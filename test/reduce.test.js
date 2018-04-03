const assert = require('assert');
const reduce = require('../lib/reduce');

describe('reduce', () => {
    it('reduces the value of an array', () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const arr = [2, 3, 4, 5, 8, 12];
        const reduced = reduce(arr, reducer);
        assert.equal(reduced, 34);
    });
    it('reduces the value of an array with initialValue', () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const arr = [2, 3, 4, 5, 8, 12];
        const reduced = reduce(arr, reducer, 5);
        assert.equal(reduced, 39);
    });
});