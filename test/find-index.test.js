const assert = require('assert');
const findIndex = require('../lib/find-index');

describe('findIndex', () => {

    it('return', () => {
        const arr = [1, 2, 3, 4];
        const moreThanTwo = item => item > 2;
        const index = findIndex(arr, moreThanTwo);
        assert.equal(index, 2);
    });

    it('return', () => {
        const arr = [1, 2];
        const moreThanTwo = item => item > 2;
        const index = findIndex(arr, moreThanTwo);
        assert.equal(index, -1);
    });
});