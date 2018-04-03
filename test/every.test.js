const assert = require('assert');
const every = require('../lib/every');

describe('every', () => {
    const isEven = x => x % 2 === 0;
    it('returns false if all elements do not match', () => {
        const arr = [1, 2, 5, 7];
        const allEven = every(arr, isEven);
        assert.equal(allEven, false);
    });

});