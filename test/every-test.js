const assert = require('assert');
const arrayMethods = require('../lib/every');

describe('array methods', () => {
    it('every', () => {
        const result = arrayMethods.myEvery(
            [2, 4, 6, 8],
            (n) => (n % 2) === 0
        );

        assert.equal(result === true);
    });
});