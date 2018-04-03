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
    
    it('returns index of element', () => {
        const array = [4, 5, 8];
        const result = arrayMethods.findIndex(array, (item) => {
            if(item === 5){
                return true;
            }
        });
        assert.equal(result, 1);
    });

    it('reduce to singal value', () => {
        const array = [1, 2, 3, 4];
        const result = reduce(array, (sum, num, i) => {
            return sum + num;
        });
        assert.equal(result, 10);
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

