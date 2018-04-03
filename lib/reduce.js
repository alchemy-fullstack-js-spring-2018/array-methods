module.exports = function reduce(array, callback, initialValue) {
    let accumulator, startingIndex;
    if(initialValue === undefined) {
        accumulator = array[0];
        startingIndex = 1;
    } else {
        accumulator = initialValue;
        startingIndex = 0;
    }
    for(let i = startingIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i]);
    }
    return accumulator;
};
 