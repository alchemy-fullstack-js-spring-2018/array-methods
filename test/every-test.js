const assert = require('assert');
const arrayMethods = require('../lib/every');

describe('EVERY', () => {
    it('every: testing evens', () => {
        const result = arrayMethods.myEvery(
            [2, 4, 6, 8],
            (n) => (n % 2) === 0
        );

        assert.equal(result, true);
    });

    it('every: testing odds', () => {
        const result = arrayMethods.myEvery(
            [1, 3, 5, 7],
            (n) => (n % 2) !== 0
        );

        assert.equal(result, true);
    });
});