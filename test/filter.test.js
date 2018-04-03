const assert = require('assert');
const arrayMethods = require('../lib/filter');

describe('array methods', () => {
    it('filter', () => {
        const testArray = arrayMethods.myFilter(
            [1, 2, 3, 4, 5, 6, 7, 8],
            (n) => {return (n % 2) === 0;}
        );

        assert.deepEqual(testArray, [2, 4, 6, 8]);
    });
});