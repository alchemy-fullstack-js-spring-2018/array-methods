const assert = require('assert');
const arrayMethods = require('../lib/find-index');

describe('FIND INDEX', () => {
    it('find-index: multiple possibilities', () => {
        const testIndex = arrayMethods.myFindIndex(
            [1, 5, 3, 5, 6],
            (n) => n === 5
        );

        assert.equal(testIndex, 1);
    });

    it('find-index: only one option', () => {
        const testIndex = arrayMethods.myFindIndex(
            [1, 2, 3, 4, 5],
            (n) => n === 5
        );

        assert.equal(testIndex, 4);
    });
});