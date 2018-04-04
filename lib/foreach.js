function foreach(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(!arr.hasOwnProperty(i)) continue;
        callback(arr[i]);
    }
}

module.exports = foreach;