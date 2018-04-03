const assert = require('assert');
const every = require('../lib/every');

describe('every', () => {
    const array = [0, 1, 2, 3, 4, 5];

    it('returns false if the callback for any element returns false', () => {
        const notEvery = every(array, x => x % 2);
        assert.equal(notEvery, false);
    });

    it('returns true if the callback for every element returns true', () => {
        const allGood = every(array, x => x < 6);
        assert.equal(allGood, true);
    });
});