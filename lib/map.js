module.exports = function map(arr, callback) {
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        result[i] = callback(arr[i]);
    } 
    return result;
};