function reduce(array, callback, initialValue = 0){
    let accum = initialValue;
    for(let i = 0; i < array.length; i++){
        accum = callback(accum, array[i]);
    }
    return accum;
}

module.exports = reduce;