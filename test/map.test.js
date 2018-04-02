const assert = require('assert');
const arrayMethods = require('../lib/map');

describe('array methods', () => {
    it('map', () => {
        const testArray = arrayMethods.myMap(
            [1, 2, 3, 4],
            (n) => {return n * 2;}
        );

        assert.deepEqual(testArray, [2, 4, 6, 8]);
    });
});