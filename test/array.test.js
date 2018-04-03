const assert = require('assert');
const arrayMethods = require('../lib/arrayMethods');

describe('arrayMethods', () =>{
    it('return true if new array', ()=>{
        const array = [2, 4, 6];
        const mapA = arrayMethods.map(array, x => x * 2);
        assert.deepEqual(mapA, [4, 8, 12]);
    });

    it('return only even numbers', ()=> {
        const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const filterA = arrayMethods.filter(myArray, x => x % 2 == 0);
        assert.equal(filterA, [2, 4, 6, 8, 10]);
    });
    
});

