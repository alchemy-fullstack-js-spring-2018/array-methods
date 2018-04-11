function map(arr, callback){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result[i] = callback(arr[i]);
    }
    return result;
}

module.exports = map;