const assert = require('assert');
const reduce = require('../lib/reduce');

describe('reduce', () => {

    it('return', () => {
        const arr = [1, 2, 3, 4];
        const callback = (accumulator, item) => accumulator + item;
        const reduced = reduce(arr, callback);
        assert.equal(reduced, 10);
    });

    it('return', () => {
        const arr = [1, 2, 3, 4];
        const callback = (accumulator, item) => accumulator + item;
        const reduced = reduce(arr, callback, 5);
        assert.equal(reduced, 15);
    });

    it('return', () => {
        const arr = [17];
        const callback = (accumulator, item) => accumulator + item;
        const reduced = reduce(arr, callback);
        assert.equal(reduced, 17);
    });

    it('return', () => {
        const arr = [17];
        const callback = (accumulator, item) => accumulator + item;
        const reduced = reduce(arr, callback, 3);
        assert.equal(reduced, 20);
    });
});