const assert = require('assert');
const arrayMethods = require('../lib/map');

describe('MAP', () => {
    it('map: multiplication', () => {
        const testArray = arrayMethods.myMap(
            [1, 2, 3, 4],
            (n) => n * 2
        );

        assert.deepEqual(testArray, [2, 4, 6, 8]);
    });

    it('map: addition', () => {
        const testArray = arrayMethods.myMap(
            [1, 2, 3, 4],
            (n) => n + 2
        );

        assert.deepEqual(testArray, [3, 4, 5, 6]);
    });
});