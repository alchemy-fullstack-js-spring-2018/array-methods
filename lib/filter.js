function filter(arr, callback){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i])) {
            result[result.length] = (arr[i]);
        }
    }
    return result;
}

module.exports = filter;