const assert = require('assert');
const map = require('../lib/map');
const findIndex = require('../lib/findIndex');
const filter = require('../lib/filter');

describe('array methods', () => {
    it('map', () => {
        const array = [0, 1, 2, 3];
        const mapped = map(array, x => x + 1);
        assert.deepEqual(mapped, [1, 2, 3, 4]);
    });

    it('findIndex', () => {
        const array = [0, 1, 2, 3];
        const result = findIndex(array, (item) => {
            if(item === 1) {
                return true;
            }
        });
        assert.equal(result, 1);
    });

    it('filter', () => {
        const array = [0, 1, 2, 3];

        const filtered = filter(array, x => x > 2);

        assert.deepEqual(filtered, [3]);
    });
});