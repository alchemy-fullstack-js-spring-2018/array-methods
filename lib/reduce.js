function reduce(array, callback, init) {
    var acc;
    
    if(init === undefined){
        acc = array[0];
    } else {
        acc = init;
    }
    for(let i = 0; i < array.length; i++) {
        if(init === undefined && i === 0) {
            i = 1;
        }
        acc = callback(acc, array[i], i);
    }
    return acc;
}

module.exports = reduce;