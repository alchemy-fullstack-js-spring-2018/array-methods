
module.exports = function reduce(arr, callback, initialValue) {
    let accumulator, i;
    if(initialValue) {
        accumulator = initialValue;
        i = 0;
    } else {
        accumulator = arr[0];
        i = 1;
    }
    for(i; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i]);
    }
    return accumulator;
};