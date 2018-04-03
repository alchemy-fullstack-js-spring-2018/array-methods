module.exports = function findIndex(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        const index = arr[i];
        const result = callback(index);
        if(result) return i;
    }
    return -1;
};