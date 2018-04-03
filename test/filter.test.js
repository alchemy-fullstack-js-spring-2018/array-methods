const assert = require('assert');
const filter = require('../lib/filter');

describe('filter', () => {

    it('return', () => {
        const arr = [1, 2, 3, 4];
        const isEven = item => item % 2 === 0;
        const filtered = filter(arr, isEven);
        assert.deepEqual(filtered, [2, 4]);
    });
});