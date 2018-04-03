module.exports = function reduce(arr, callback, initialValue) {
    let currentValue = 0;
    if(initialValue) {
        currentValue = initialValue;
    }
    for(let i = 0; i < arr.length; i++) {
        const accumulator = arr[i];
        currentValue = callback(accumulator, currentValue);
    }
    return currentValue;
};