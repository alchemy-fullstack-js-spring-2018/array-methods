const assert = require('assert');
const filter = require('../lib/filter');

describe('filter', () => {

    it('filters out items less than 6', () => {

        const greaterThan6 = x => x > 6;
        const arr = [2, 5, 6, 8, 9, 12];
        const bigNumbers = filter(arr, greaterThan6);

        assert.deepEqual(bigNumbers, [8, 9, 12]);
    });

});