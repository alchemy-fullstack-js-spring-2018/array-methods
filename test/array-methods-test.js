const assert = require ('assert');
const arrays = require('../lib/arrays');



describe('array-methods', () => {
    
    it ('creates new array of same length (maps)', () => {
        const arr = [1, 2, 3];
        const result = arrays.map(arr, x =>  x + 1);
        assert.deepEqual(result, [2, 3, 4]);
    });

    it('filters array that returns true', () => {
        const arr = [1, 2, 3];
        const result = arrays.filter(arr, x => x == 1);
        assert.deepEqual(result, [1]);
    });

    it('finds Index, returns first item in index thats truthy', () => {
        const arr = [1, 2, 3, 4];
        const result = arrays.findIndex(arr, x => x == 2);
        assert.deepEqual(result, 1);
    });

    it('findIndex returns -1 if no truthy value found', () => {
        const arr = [1, 2, 3, 2, 1];
        const result = arrays.findIndex(arr, x => x > 10);
        assert.deepEqual(result, -1);
    });

    it('every returns true if every item in array is truthy', () => {
        const arr = [1, 2, 3];
        const result = arrays.every(arr, x => x < 10);
        assert.deepEqual(result, true);
    });

    it('every returns false if falsy item in array', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = arrays.every(arr, x => x > 10);
        assert.deepEqual(result, false);
    });
});