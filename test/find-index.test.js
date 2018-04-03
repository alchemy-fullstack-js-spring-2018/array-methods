const assert = require('assert');
const findIndex = require('../lib/find-index');

describe('find-index', () => {

    it('finds index of number that equals 8', () => {
        const equalsEight = x => x === 8;
        const arr = [3, 4, 5, 8, 10, 8, 12];
        const indexNumber = findIndex(arr, equalsEight);
        
        assert.deepEqual(indexNumber, 3);

    });
});