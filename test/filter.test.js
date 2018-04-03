const assert = require('assert');
const filter = require('../lib/filter');

describe('filter', () => {
    const originalArray = [0, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 0];

    it('creates a new array with all items whose callback returned true or a truthy value', () => {
        const oddArray = filter(originalArray, x => x % 2);
        assert.deepEqual(oddArray, [1, 3, 5, 5, 3, 1]);
    });

    it('creates a new array with all items whose callback returned true or a truthy value', () => {
        const evenArray = filter(originalArray, x => !(x % 2));
        assert.deepEqual(evenArray, [0, 2, 4, 6, 4, 2, 0]);
    });
});