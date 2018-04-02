

module.exports = function map(arr, callback) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
};