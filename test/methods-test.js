const assert = require('assert');
const methods = require('../lib/methods');

//callback function to determine if number is even
const evenNum = x => x % 2 === 0;

describe('MVP', () => {
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

    it('REDUCE - Returns sum of all elements in array with NO initial accumulator', () => {
        const arr = [1, 2, 3, 4];
        const sumArray = (total, num) => total + num;
        const sumTotalOfArray = methods.reduce(arr, sumArray);
        assert.equal(sumTotalOfArray, 10);
    });

    it('REDUCE - Returns sum of all elements in array with an initial accumulator', () => {
        const arr = [1, 2, 3, 4];
        const sumArray = (total, num) => total + num;
        const sumTotalOfArray = methods.reduce(arr, sumArray, 5);
        assert.equal(sumTotalOfArray, 15);
    });

    it('EVERY - Returns true if every element in array is even', () => {
        const arr = [2, 4, 6];
        const allEvenArray = methods.every(arr, evenNum);
        assert.equal(allEvenArray, true);
    });

    it('EVERY - Returns false if any element in array is NOT even', () => {
        const arr = [2, 4, 7];
        const allEvenArray = methods.every(arr, evenNum);
        assert.equal(allEvenArray, false);
    });
});

describe('CHALLENGE - ARRAYS WITH HOLES', () => {

    it('MAP - Returns a new array of each number squared', () => {
        const arr = [1, 2, , 3];
        const squareNum = x => x * x;
        const squaredArray = methods.map(arr, squareNum);
        assert.deepEqual(squaredArray, [1, 4, , 9]);
    });

    it('FILTER - Returns a new array where the numbers are even', () => {
        const arr = [1, , 2, 3, 4];
        const evenArray = methods.filter(arr, evenNum);
        assert.deepEqual(evenArray, [2, 4]);
    });

    it('FIND_INDEX - Returns index of first number that is even', () => {
        const arr = [1, , 2, 3, 4];
        const evenIndex = methods.findIndex(arr, evenNum);
        assert.equal(evenIndex, 2);
    });

    it('FIND_INDEX - Returns -1 since the array has no even number', () => {
        const arr = [1, 3, 5, , 7];
        const noEvenIndex = methods.findIndex(arr, evenNum);
        assert.equal(noEvenIndex, -1);
    });

    it('REDUCE - Returns sum of all elements in array with NO initial accumulator', () => {
        const arr = [1, 2, , 3, 4];
        const sumArray = (total, num) => total + num;
        const sumTotalOfArray = methods.reduce(arr, sumArray);
        assert.equal(sumTotalOfArray, 10);
    });

    it('REDUCE - Returns sum of all elements in array with an initial accumulator', () => {
        const arr = [1, , 2, 3, 4];
        const sumArray = (total, num) => total + num;
        const sumTotalOfArray = methods.reduce(arr, sumArray, 5);
        assert.equal(sumTotalOfArray, 15);
    });

});