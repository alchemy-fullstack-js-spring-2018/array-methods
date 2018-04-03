
module.exports = function every(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        if((callback(arr[i])) === false) return false;
    }
    return true;
};