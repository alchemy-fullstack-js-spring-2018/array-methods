module.exports = function reduce(arr, callback, initialValue) {
    let currentValue = initialValue;
    
    if(!currentValue) {
        currentValue = 0;
    }

    for(let i = 0; i < arr.length; i++) {
        const accumulator = arr[i];
        currentValue = callback(accumulator, currentValue);
    }
    return currentValue;
};