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
        assert.deepEqual(filterA, [2, 4, 6, 8, 10]);
    });
    
    it('finds the index of an item in array', () => {
        const array = [1, 2, 3, 4, 5];
        const index = arrayMethods.findIndex(array, 4);
        assert.equal(index, 3);
    });

    it('reduces with addition', () => {
        const array = [1, 2, 3, 4, 5];   
        const reduced = arrayMethods.reduce(array, (sum, num)  => {
            return sum + num;
        });
        assert.equal(reduced, 15);
    });


    it('every', () => {
        const array = [5, 7, 3, 4];

        const result = every(array, (item) => {
           
            if(item > 0) {
                return true;
            } else {
                return false;
            }
        });

        assert.equal(result, true);
    });

});

