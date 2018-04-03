function reduce(array, callback, initialValue = 0){
    for(let i = 0; i < array.length; i++){
        initialValue += array[i];
        if(callback(array[i + 1])){
            reduce(array, callback, initialValue);
        }
    }
}

module.exports = reduce;