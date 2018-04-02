const assert = require('assert');
const func = require('../lib/array-methods');

describe('Functional array methods', () => {

    const array = [1, 2, 3, 4, 5];

    it('maps an array given a callback', () => {
        const mapped = func.map(array, x => x + 1);
        assert.deepEqual(mapped, [2, 3, 4, 5, 6]);
    });
});