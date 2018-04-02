const assert = require('assert');
const map = require('../lib/map');
const filter = require('../lib/filter');
const findIndex = require('../lib/find-index');


describe('array methods', () => {
    const array = [1, 3, 5, 7, 10];

    it('mapping function', () => {
        const addOne = item => item + 1;
        const result = map(array, addOne);
    
        assert.deepEqual(result, [2, 4, 6, 8, 11]);
    });

    it('filter function', () => {
        const isEven = x => x % 2 === 0;
        const result = filter(array, isEven);
    
        assert.deepEqual(result, [10]);
    });

    it('find index function', () => {
        const isEven = x => x % 2 === 0;
        const result = findIndex(array, isEven);
    
        assert.deepEqual(result, 4);
    });

    it('find index returns -1 if all false', () => {
        const odds = [3, 5, 11];
        const isEven = x => x % 2 === 0;
        const result = findIndex(odds, isEven);
    
        assert.deepEqual(result, -1);
    });


});