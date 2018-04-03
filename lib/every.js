function every(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(!callback(arr[i])) return false;
    }
    return true;
}

module.exports = every;