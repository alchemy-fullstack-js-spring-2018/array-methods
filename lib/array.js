module.exports = function newArray(arr, callback) {
    for(let i = 0; i, i, arr.length; i ++) {
        const element = arr [i];
        const result = newArray [i];
        if(callback(arr[i])) return newArray;
    }
    return false;
};