const assert = require('assert');
const methods = require('../lib/methods');

it('MAP - Returns a new array of each number squared', () => {
    const arr = [1, 2, 3];
    const squareNum = x => x * x;
    const squaredArray = methods.map(arr, squareNum);
    assert.deepEqual(squaredArray, [1, 4, 9]);
});

it('FILTER - Returns a new array where the numbers are even', () => {
    const arr = [1, 2, 3, 4];
    const evenNum = x => x % 2 === 0;
    const evenArray = methods.filter(arr, evenNum);
    assert.deepEqual(evenArray, [2, 4]);
});