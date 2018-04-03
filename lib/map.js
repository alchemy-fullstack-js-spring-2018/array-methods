module.exports = function map(arr, callback) {
    const doubled = [];
    for(let i = 0; i < arr.length; i++) {
        const result = callback(arr[i]);
        doubled.push(result);
    }
    return doubled;
};