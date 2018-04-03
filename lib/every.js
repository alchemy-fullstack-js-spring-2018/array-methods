module.exports = function every(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        const result = callback(arr[i]);
        if(result === false) return false;
    }
    return true;
};