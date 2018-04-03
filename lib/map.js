module.exports = function map(arr, callback) {
    const arrNew = [];
    let j = 0;
    for(let i = 0; i < arr.length; i++) {
        arrNew[j] = (callback(arr[i]));
        j++;
    }
    return arrNew;
};