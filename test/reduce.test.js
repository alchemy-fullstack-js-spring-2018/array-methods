const assert = require('assert');
const reduce = require('../lib/reduce');

describe('reduce', () => {

    it('returns the sum of all the numbers in the array', () => {
        const arr = [1, 2, 3, 4];
        const callback = (accumulator, item) => accumulator + item;
        const reduced = reduce(arr, callback);
        assert.equal(reduced, 10);
    });

    it('returns the sum of all the numbers in the array and the initialValue', () => {
        const arr = [1, 2, 3, 4];
        const callback = (accumulator, item) => accumulator + item;
        const reduced = reduce(arr, callback, 5);
        assert.equal(reduced, 15);
    });

    it('returns the sum of all the numbers in the array', () => {
        const arr = [17];
        const callback = (accumulator, item) => accumulator + item;
        const reduced = reduce(arr, callback);
        assert.equal(reduced, 17);
    });

    it('returns the sum of all the numbers in the array and the initialValue', () => {
        const arr = [17];
        const callback = (accumulator, item) => accumulator + item;
        const reduced = reduce(arr, callback, 3);
        assert.equal(reduced, 20);
    });
});