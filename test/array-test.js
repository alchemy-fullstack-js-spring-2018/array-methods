const assert = require ('assert');
const array = require ('../lib/array');



it ('creates new array of same length', () => {
    const arr = ['banana', 'orange', 'pineapple'];
    const newArray = array.map(arr, x => x * 2);
    assert.deepEqual(newArray, true);
});