const assert = require('assert');
const array = require('../lib/array');

describe('array-methods', () => {

    it('map', () => {
    
        
        const testArray = [2, 3, 6, 5];
        const newArray = array.map(testArray, x => x * x);
        assert.deepEqual(newArray, [4, 9, 36, 25]);

    })

    it('filter', () => {

        const testArray2 = ['red', 'blue', 'yellow', 'green'];
        const newArray2 = array.filter(testArray2, x => x.length > 4);
        assert.deepEqual(newArray2, ['yellow', 'green']);

    })

    it('findIndex', () => {

        const testArray3 = [3, 26, 75, 4];
        const newArray3 = array.findIndex(testArray3, x => x > 27 );
        assert.deepEqual(newArray3, 2);

    })

    it('reduce', ()=> {

        // const callback = (accumulator, item) => accumulator + item;
        const testArray4 = [1,2,3,4];
        const newArray4 = array.reduce(testArray4, (x, y) => x * y)
        assert.deepEqual(newArray4, 24);
    })
    
    it('reduce with initial value', () => {

        const testArray5 = [1,2,3,4];
        let initialValue = 3;
        const newArray5 = array.reduce(testArray5,(x, y) => x + y, initialValue);
        assert.deepEqual(newArray5, 13);
    })

    it('every', () => {

        const testArray6  = [1,2,3,4,5,6];
        const newArray6 = array.every(testArray6, x => x < 10);
        assert.deepEqual(newArray6, true);

    })

    //this test should result in a fail on the every method function. 
    it('every failed test', () => {

        const testArray7 = [1,9,3];
        const newArray7 = array.every(testArray7, x => x < 10);
        assert.deepEqual(newArray7, true);
    })
  
}); 
