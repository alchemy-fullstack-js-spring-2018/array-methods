const assert = require('assert');
const findIndex = require('../lib/find-index');

describe('find-index', () => {

    it('finds index of item that equals 8', () => {
        const equalsEight = x => x === 8;
        const arr = [3, 4, 5, 8, 10, 8, 12];
        const indexNumber = findIndex(arr, equalsEight);
        
        assert.equal(indexNumber, 3);
    });
    it('returns -1 if no item is found', () => {
        const equalsSeven = x => x === 7;
        const arr = [3, 4, 5, 8, 10, 8, 12];
        const indexNumber = findIndex(arr, equalsSeven);

        assert.equal(indexNumber, -1);
    });
});