const assert = require('assert');
const reduce = require('../lib/reduce');

describe('reduce', () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    it('returns sum all elements in the array', () => {
        const arr = [1, 2, 3, 4];
        const reduced = reduce(arr, reducer);
        assert.equal(reduced, 10);
    }),
    it('returns sum of the initial value and all elements in the array ', () => {
        const arr = [1, 2, 3, 4];
        const reduced = reduce(arr, reducer, 5);
        assert.equal(reduced, 15);
    })
    ;
});