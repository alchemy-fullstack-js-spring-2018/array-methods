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
            { name: 'Marty', role: 'instructor' },
            { name: 'Andrew', role: 'TA' },
            { name: 'David', role: 'TA' },
            { name: 'Keli', role: 'student' }
        ];
        const amalgamate = (amalgamation, individual) => {
            amalgamation[individual.name] = individual.role;
            return amalgamation;
        };
        const singleObject = reduce(arrayOfObjects, amalgamate, {});
        assert.deepEqual(singleObject, { Marty: 'instructor', Andrew: 'TA', David: 'TA', Keli: 'student' });
    });
});