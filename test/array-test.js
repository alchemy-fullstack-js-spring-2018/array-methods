const assert = require ('assert');
const array = require ('../lib/array');


//test to map new array
it ('creates new array of same length (maps)', () => {
    const array = ['banana', 'orange', 'pineapple'];
    const newArray = array.map(arr, x => x * 2);
    assert.deepEqual(newArray, true);
});
//test to filter new array
it ('filters new array', () => {
    const array = ['cherry', 'blueberry', 'kiwi', 'banana'];
    const newArray = array.filter(array, x => x.length < array.length);
    assert.deepEqual(newArray, ['banana']);
});