function findIndex(array, callback) {
    let result = -1;
    for(let i = 0; i < array.length; i++){
    
        if(callback(array[i], i) === true){
            result = i;
        }
    }
    return result;
}

module.exports = findIndex;