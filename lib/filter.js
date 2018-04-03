module.exports = function filter(arr, callback) {
    const arrNew = [];
    let j = 0;
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i]) === true) {
            arrNew[j] = (arr[i]);
            j++;
        }
    }
    return arrNew;
};