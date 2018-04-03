const assert = require('assert');
const reduce = require('../lib/reduce');

describe('reduce', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const gatherSum = (accumulator, x) => accumulator + x;

    it('adds numerical elements of an array when an initial value of zero is provided', () => {
        const arraySum = reduce(originalArray, gatherSum, 0);
        assert.equal(arraySum, 15);
    });

    it('adds numerical elements of an array to an initial value', () => {
        const arraySumPlusInitial = reduce(originalArray, gatherSum, 100);
        assert.equal(arraySumPlusInitial, 115);
    });
 
    it('adds numerical elements of an array when no initial value is provided', () => {
        const arraySumWithoutInitial = reduce(originalArray, gatherSum);
        assert.equal(arraySumWithoutInitial, 15);
    });
    
    it('does more than addition', () => {
        const findHighest = (a, b) => a > b ? a : b;
        const highest = reduce(originalArray, findHighest);
        assert.equal(highest, 5);
    });

    it('can even work with objects', () => {
        const arrayOfObjects = [
            { name: 'Marty', letters: 5 },
            { name: 'Andrew', letters: 6 },
            { name: 'David', letters: 5 }
        ];
        const objectify = (final, individual) => {
            final[individual.name] = individual.letters;
            return final;
        };
        const singleObject = reduce(arrayOfObjects, objectify, {});
        assert.deepEqual(singleObject, { Marty: 5, Andrew: 6, David: 5 });
    });
});