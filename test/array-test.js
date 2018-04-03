const assert = require('assert');
const array = require('../lib/array');

describe('array-methods', () => {

    it('map', () => {
    
        
        const testArray = [2, 3, 6, 5];
        const newArray = array.map(testArray, x => x * x);
        assert.deepEqual(newArray, [4, 9, 36, 25]);

    })

}); 
