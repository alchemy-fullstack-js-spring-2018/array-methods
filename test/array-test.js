const assert = require('assert');
const array = require('../lib/array');

describe('array methods', () => {


    it('map', () => {
        const arr = [1, 2, 3, 4];
        const newArr = array.map(arr, x => x * x);
        assert.deepEqual(newArr,[1, 4, 9, 16]);
    })

    it('filter', () => {
        const arr = [1, 2, 3, 4];
        const filtered = array.filter(arr, x => x > 2);
        assert.deepEqual(filtered, [3, 4]);
    })

    it('findIndex', () => {
        const arr = [1, 2, 3, 4];
        const index = array.findIndex(arr, x => x > 2);
        assert.equal(index, true);
    })
}) 