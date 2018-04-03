function findIndex(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i])) return i;  
    }
    return -1;
}

module.exports = findIndex;