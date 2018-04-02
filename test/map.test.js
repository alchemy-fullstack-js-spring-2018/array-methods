const assert = require('assert');
const map = require('../lib/map');

describe('map', () => {

    const addTwo = x => x + 2;
    it('adds two to the array', () => {
        const arr = [2, 5, 6, 9];

        const addedTwo = map(arr, addTwo);

        assert.deepEqual(addedTwo, [4, 7, 8, 11]);

    });

});