const chai = require('chai');
const assert = chai.assert;
const func = require('../lib/array-methods');

describe('Functional array methods', () => {

    const array = [1, 2, 3, 4, 5];

    it('maps an array given a callback', () => {
        const mapped = func.map(array, x => x + 1);
        assert.deepEqual(mapped, [2, 3, 4, 5, 6]);
    });

    it('maintains hole in array given a callback', () => {
        const arr = [1, 2,, 3, 4]
        const mapped = func.map(arr, x => x + 1);
        assert.deepEqual(mapped, [2, 3, undefined, 4, 5]);
    });
    
    it('filters array', () => {
        const filtered = func.filter(array, x => x % 2 === 0);
        assert.deepEqual(filtered, [2, 4]);
    });

    it('skips hole in array for filter', () => {
        const arr = [1, 2,, 3, 4]
        const filtered = func.filter(arr, x => x % 2 === 0);
        assert.deepEqual(filtered, [2, 4]);
    });

    it('finds the index of an item in array', () => {
        const index = func.findIndex(array, 4);
        assert.equal(index, 3);
    });

    it('returns -1 if item not present in array', () => {
        const index = func.findIndex(array, 6);
        assert.equal(index, -1);
    });

    it('reduces with addition', () => {
        const reduced = func.reduce(array, (sum, num)  => {
            return sum + num;
        });
        assert.equal(reduced, 15);
    });

    it('reduces with multiplication', () => {
        const reduced = func.reduce(array, (sum, num)  => {
            return sum * num;
        });
        assert.equal(reduced, 120);
    });
    
    it('reduces with multiplication and optional init', () => {
        const reduced = func.reduce(array, (sum, num)  => {
            return sum * num;
        }, 2);
        assert.equal(reduced, 240);
    });

    it('returns true if all values meet callback criteria', () => {
        const arr = [2, 4, 6, 8];
        const everied = func.every(arr, item => {
            return item % 2 === 0;
        });
        assert.equal(everied, true);
    });

    it('skips hole for every', () => {
        const arr = [2, 4,, 6, 8];
        const everied = func.every(arr, item => {
            return item % 2 === 0;
        });
        assert.equal(everied, true);
    });

    it('returns false if any value does not meet callback criteria', () => {
        const arr = [2, 4, 5, 6, 8];
        const everied = func.every(arr, item => {
            return item % 2 === 0;
        });
        assert.equal(everied, false);
    });

    it('performs callback on each element', () => {
        const result = [];
        func.forEach(array, item => {
            result.push(item);
        });
        assert.deepEqual(result, [1, 2, 3, 4, 5]);
    });

    it('skips holes in forEach', () => {
        const arr = [1, 2,, 3];
        const result = [];
        func.forEach(arr, item => {
            result.push(item);
        });
        assert.deepEqual(result, [1, 2, undefined, 3]);
    });

});