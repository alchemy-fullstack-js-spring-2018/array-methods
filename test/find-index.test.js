const assert = require('assert');
const findIndex = require('../lib/find-index');

describe('find index', () => {
    const array = [0, 1, 2, 3, 4, 5];

    it('returns -1 if no match is found', () => {
        const defaultIndex = findIndex(array, x => x > 5);
        assert.equal(defaultIndex, -1);
    });
});