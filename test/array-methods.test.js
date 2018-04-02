const assert = require('assert');
const map = require('../lib/map');
const filter = require('../lib/filter');
const findIndex = require('../lib/findIndex');
const every = require('../lib/every');

describe('array methods', () => {
    it('map returns array of elements modified by callback', () => {
        const arr = [1, 2, 3];
        const result = map(arr, x => x + 1);
        assert.deepEqual(result, [2, 3, 4]);
    });

    it('filter returns array of elements that return true from callback', () => {
        const arr = [1, 2, 3];
        const result = filter(arr, x => x > 2);
        assert.deepEqual(result, [3]);
    });

    it('findIndex returns fist item index that has truthy value of callback', () => {
        const arr = [1, 2, 3, 2];
        const result = findIndex(arr, x => x === 2);
        assert.deepEqual(result, 1);  
    });

    it('findIndex returns -1 if no truthy value found', () => {
        const arr = [1, 2, 3];
        const result = findIndex(arr, x => x === 10);
        assert.equal(result, -1);
    });

    it('every returns true if every item in array is truthy', () => {
        const arr = [1, 2, 3];
        const result = every(arr, x => x < 5);
        assert.equal(result, true);
    });

    it('every returns false if falsy item in array', () => {
        const arr = [1, 2, 3];
        const result = every(arr, x => x === 1);
        assert.equal(result, false);
    });

    // it('reduce takes a callback and arr and returns single value', () => {
    //     const arr = [1, 2, 3];
    //     const result = reduce(arr, (acc, curr) => acc + curr);
    // });

    // it('findIndex ignores empty spaces in array', () => {
    //     let callCount = 0;
    //     const callback = x => x === 3;
    //     const arr = [1, ,2, 3];
    //     const result = findIndex(arr, x => {
    //         callCount ++;
    //         callback(x);
    //     });
    //     assert.deepEqual(callCount, 3);
    // });
});