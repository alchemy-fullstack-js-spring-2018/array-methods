const assert = require('assert');
const map = require('../lib/map');
const filter = require('../lib/filter');
const findIndex = require('../lib/find-index');
const reduce = require('../lib/reduce');
const every = require('../lib/every');


describe('array methods', () => {
    const array = [1, 3, 5, 7, 10];
    const odds = [3, 5, 11];
    const evens = [-2, 4, 24];

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
        const isEven = x => x % 2 === 0;
        const result = findIndex(odds, isEven);
    
        assert.deepEqual(result, -1);
    });

    it('reduce function', () => {
        const callback = (sum, currentNum) => sum + currentNum;
        const result = reduce(array, callback);
    
        assert.deepEqual(result, 26);
    });

    it('reduce function with initial value', () => {
        const callback = (sum, currentNum) => sum + currentNum;
        const result = reduce(array, callback, 4);
    
        assert.deepEqual(result, 30);
    });

    it('every function true', () => {
        const isEven = x => x % 2 === 0;
        const result = every(evens, isEven);
    
        assert.deepEqual(result, true);
    });

    it('every function false', () => {
        const isEven = x => x % 2 === 0;
        const result = every(array, isEven);
    
        assert.deepEqual(result, false);
    });

});