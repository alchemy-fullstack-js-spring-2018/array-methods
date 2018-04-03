const assert = require('assert');
const arrayMethods = require('../lib/reduce');

describe('REDUCE', () => {
    it('reduce: addition without initial value', () => {
        let finalValue = arrayMethods.myReduce(
            [5, 4, 3],
            (accumulator, n) => accumulator + n,
        );
        assert.equal(finalValue, 12);
    });
 
    it('reduce: addition with initial value', () => {
        let finalValue = arrayMethods.myReduce(
            [5, 4, 3],
            (accumulator, n) => accumulator + n,
            5
        );
        assert.equal(finalValue, 17);
    });

    it('reduce: multiplication without initial value', () => {
        let finalValue = arrayMethods.myReduce(
            [5, 4, 3],
            (accumulator, n) => accumulator * n
        );
        assert.equal(finalValue, 60);
    });

    it('reduce: multiplication with initial value', () => {
        let finalValue = arrayMethods.myReduce(
            [5, 4, 3],
            (accumulator, n) => accumulator * n,
            50
        );
        assert.equal(finalValue, 110);
    });
});