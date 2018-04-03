const assert = require('assert');
const arrayMethods = require('../lib/filter');

describe('FILTER', () => {
    it('filter: testing evens', () => {
        const testArray = arrayMethods.myFilter(
            [1, 2, 3, 4, 5, 6, 7, 8],
            (n) => (n % 2) === 0
        );

        assert.deepEqual(testArray, [2, 4, 6, 8]);
    });

    it('filter: testing odds', () => {
        const testArray = arrayMethods.myFilter(
            [1, 2, 3, 4, 5, 6, 7, 8],
            (n) => (n % 2) !== 0
        );

        assert.deepEqual(testArray, [1, 3, 5, 7]);
    });

    it('filter: testing brute force selection', () => {
        const testArray = arrayMethods.myFilter(
            [1, 0, 0, 1, 1, 0, 1, 0],
            (n) => n === 1
        );

        assert.deepEqual(testArray, [1, 1, 1, 1]);
    });
});