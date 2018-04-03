const assert = require('assert');
const arrayMethods = require('../lib/find-index');

describe('array methods', () => {
    it('find-index', () => {
        const testIndex = arrayMethods.myFindIndex(
            [1, 5, 3, 5, 6],
            (n) => n === 5
        );

        assert.equal(testIndex, 1);
    });
});