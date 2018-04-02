const assert = require('assert');
const array = require('../lib/array');

describe('array-methods', () => {

    it('map', () => {
    
        const testArray = [2, 3, ,6, 5];
        // const mapArray = array.map(testArray)
        const mappedArray = testArray.map(x => x * 2);
        

    })

}); 
