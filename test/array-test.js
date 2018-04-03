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

    // it('findIndex', () => {

    //     const testArray3 = [];
    //     const newArray3 = array.findIndex();
    //     assert.deepEqual(newArray3, []);

    // })
}); 
