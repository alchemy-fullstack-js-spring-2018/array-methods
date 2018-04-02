module.exports = function map(arr, callback) {
    const arrNew = [];
    for(let i = 0; i < arr.length; i++) {
        arrNew.push(callback(arr[i]));
    }
    return arrNew;
};