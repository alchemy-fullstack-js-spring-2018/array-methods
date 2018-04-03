

module.exports = function map(arr, callback) {
    let result = [];
    result.length = arr.length;

    for(let i = 0; i < arr.length; i++) {
        result[i] = callback(arr[i]);
    }
    return result;
};