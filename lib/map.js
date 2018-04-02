function map(arr, callback){
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        newArray.push(callback(arr[i]))
    }
    return newArray;
}

module.exports = map;