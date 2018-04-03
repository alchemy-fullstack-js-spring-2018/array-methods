module.exports = function reduce(arr, callback, initialValue) {
    let accumulator = 0;
    if(initialValue) {
        accumulator = initialValue;
    }
    for(let i = 0; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i]);
    }
    return accumulator;
};