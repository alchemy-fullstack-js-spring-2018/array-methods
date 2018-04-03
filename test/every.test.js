const assert = require('assert');
const every = require('../lib/every');

describe('every', () => {

    it('returns ture when all items in the array are greater than 0', () => {
        const arr = [1, 2, 3, 4];
        const callback = item => item > 0;
        const all = every(arr, callback);
        assert.equal(all, true);
    });

    it('returns false when at least 1 item in the area is not greater than 1', () => {
        const arr = [1, 2, 3, 4];
        const callback = item => item > 1;
        const all = every(arr, callback);
        assert.equal(all, false);
    });
});