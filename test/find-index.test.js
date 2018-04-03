const assert = require('assert');
const findIndex = require('../lib/find-index');

describe('findIndex', () => {

    it('returns the first index of the frist number in the array larger than 2', () => {
        const arr = [1, 2, 3, 4];
        const moreThanTwo = item => item > 2;
        const index = findIndex(arr, moreThanTwo);
        assert.equal(index, 2);
    });

    it('return -1 if no number in the array is larger than 2', () => {
        const arr = [1, 2];
        const moreThanTwo = item => item > 2;
        const index = findIndex(arr, moreThanTwo);
        assert.equal(index, -1);
    });
});