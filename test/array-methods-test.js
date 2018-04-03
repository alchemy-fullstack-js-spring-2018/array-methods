const assert = require('assert');
const map = require('../lib/map');
const every = require('../lib/every');
const filter = require('../lib/filter');
const findIndex = require('../lib/findIndex');
const reduce = require('../lib/reduce');

describe('array methods', () => {
   
    it('map to new array', () => {
        let array = [1, 1, 1];

        const result = map(array, n => {
            return n + 2;
        });

        assert.deepEqual(result, [3, 3, 3]);
    });

    it('check for all true in array', () => {
        let array = [1, 1, 1];

        const result = every(array, n => {
            if(n > 0) {
                return true;
            } else {
                return false;
            }
        });

        assert.deepEqual(result, true);
    });

    it('filter items', () => {
        let array = [1, 2, 1, 1];

        const result = filter(array, n => {
            return n === 1;
        });

        assert.deepEqual(result, [1, 1, 1]);
    });

    it('find index', () => {
        let array = [1, 2, 1, 1];
        
        const result = findIndex(array, n => {
            return n === 2;
        });

        assert.deepEqual(result, 1);
    });

    it('reduce', () => {
        let array = [1, 2, 1, 1];

        const result = reduce(array, accumulator => {
            return reduce(array, accumulator);
        });

        assert.equal(result, 5);
    });
});