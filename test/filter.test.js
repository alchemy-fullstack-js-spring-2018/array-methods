const assert = require('assert');
const filter = require('../lib/filter');

describe('filter', () => {
    it('creates a new array with all items whose callback returned true or a truthy value', () => {
        const originalArray = [0, 1, 2, 3, 4, 5, 6];
        const oddArray = filter(originalArray, x => x % 2);
        assert.deepEqual(oddArray, [1, 3, 5]);
    });
});