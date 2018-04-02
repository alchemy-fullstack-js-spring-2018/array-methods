const assert = require('assert');
const methods = require('../lib/methods');

//callback function to determine if number is even
const evenNum = x => x % 2 === 0;


it('MAP - Returns a new array of each number squared', () => {
    const arr = [1, 2, 3];
    const squareNum = x => x * x;
    const squaredArray = methods.map(arr, squareNum);
    assert.deepEqual(squaredArray, [1, 4, 9]);
});

it('FILTER - Returns a new array where the numbers are even', () => {
    const arr = [1, 2, 3, 4];
    const evenArray = methods.filter(arr, evenNum);
    assert.deepEqual(evenArray, [2, 4]);
});

it('FIND_INDEX - Returns index of first number that is even', () => {
    const arr = [1, 2, 3, 4];
    const evenIndex = methods.findIndex(arr, evenNum);
    assert.equal(evenIndex, 1);
});

it('FIND_INDEX - Returns -1 since the array has no even number', () => {
    const arr = [1, 3, 5, 7];
    const noEvenIndex = methods.findIndex(arr, evenNum);
    assert.equal(noEvenIndex, -1);
});

it('REDUCE - Returns sum of all elements in array', () => {
    const arr = [1, 2, 3, 4];
    const sumArray = (total, num) => total + num;
    const sumTotalOfArray = methods.reduce(arr, sumArray);
    assert.equal(sumTotalOfArray, 10);
});