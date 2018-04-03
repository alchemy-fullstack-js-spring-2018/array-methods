const assert = require('assert');
const arrayMethods = require('../lib/reduce');

describe('array methods', () => {
    it('reduce', () => {
        let finalValue = arrayMethods.myReduce(
            [5, 4, 3],
            (accumulator, n) => accumulator + n,
            5
        );
        assert.equal(finalValue, 17);
    });
});