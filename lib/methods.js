function map(arr, callback){

    const result = [];

    for(let i = 0; i < arr.length; i++){
        result.push(callback(arr[i], i));
    }
    return result;
}

module.exports = map;