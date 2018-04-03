const assert = require('assert');
const every = require('../lib/every');

describe('every', () => {
    const isEven = x => x % 2 === 0;
    it('returns false if all elements do not match', () => {
        const arr = [2, 2, 2, 3];
        const allEven = every(arr, isEven);
        assert.equal(allEven, false);
    }),
    it('returns true if all elements match', () => {
        const arr = [2, 2, 2, 2];
        const allEven = every(arr, isEven);
        assert.equal(allEven, false);
    })
    ;

});