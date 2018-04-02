const assert = require('assert');
const func = require('../lib/array-methods');

describe('Functional array methods', () => {

    const array = [1, 2, 3, 4, 5];

    it('maps an array given a callback', () => {
        const mapped = func.map(array, x => x + 1);
        assert.deepEqual(mapped, [2, 3, 4, 5, 6]);
    });

    it('maintains hole in array given a callback', () => {
        const arr = [1, 2,, 3, 4]
        const mapped = func.map(arr, x => x + 1);
        assert.deepEqual(mapped, [2, 3, undefined, 4, 5]);
    });

    it('filters array', () => {
        const filtered = func.filter(array, x => x % 2 === 0);
        assert.deepEqual(filtered, [2, 4]);
    });
});