const assert = require ('assert');
const map = require('../lib/map');
const filter = require('../lib/filter').default;


describe('array-methods', () => {
//test to map new array
    it ('creates new array of same length (maps)', () => {
        let array = ['banana', 'orange', 'pineapple'];

        const result = map(array, x => {
            return x + 2;
        });
        assert.deepEqual(result, ['banana', 'orange', 'pineapple']);
    });
    it('check arrays are equal', () => {
        let array = ['kiwi', 'apple', 'cherry'];

        const result = map(array, x => {
            if(x > 0) {
                return true;
            } else {
                return false;
            }
        });
        assert.deepEqual(result, true);
    });


    //test to filter new array
    it ('filters new array', () => {
        let array = ['kiwi', 'apple', 'cherry', 'banana'];
        const result = filter(array, x => {
            return x === 'banana';
        });
        assert.deepEqual(result, ['banana']);
    });
});