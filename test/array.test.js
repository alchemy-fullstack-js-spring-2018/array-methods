const assert = require('assert');
const arrayMethods = require('../lib/arrayMethods');

describe('map', () =>{
    it('returns true if elements match', ()=>{
        const array = [2, 4, 6];
        const mapA = arrayMethods.map(array, x => x * 2);
        assert.deepEqual(mapA,[4,8,12]);
    });

    
})

