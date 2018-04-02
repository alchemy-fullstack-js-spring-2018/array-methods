const assert = require('assert');
const arrayMethods = require('../lib/map');

describe('array methods', () => {
    it('map', () => {
        const testArray = arrayMethods.map([1, 2, 3, 4], (n) => {
            n * 2;
        });

        assert.equal(testArray, [2, 4, 6, 8]);
    });
});