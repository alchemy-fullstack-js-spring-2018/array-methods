const assert = require('assert');
const map = require('../lib/methods');

describe('array methods', () => {
    it('map', () => {
        const array = [0, 1, 2, 3];
        const mapped = map(array, x => x + 1);
        assert.deepEqual(mapped, [1, 2, 3, 4]);
    });
});