function filter(arr, callback){
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i])) newArray.push(arr[i]);
    }
    return newArray;
}

module.exports = filter;