const assert = require('assert');
const findIndex = require('../lib/find-index');

describe('findIndex', () => {
    const isEven = x => x % 2 === 0;
    it('returns index of first true value', () => {
        const arr = [3, 2, 3, 3];
        const anyEven = findIndex(arr, isEven);
        assert.equal(anyEven, 1);
    }),
    it('returns false if no index is true', () => {
        const arr = [3, 3, 3, 3];
        const anyEven = findIndex(arr, isEven);
        assert.equal(anyEven, false);
    })
    ;
});