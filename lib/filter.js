module.exports = function filter(arr, callback) {
    const arrNew = [];
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i]) === true) {
            arrNew.push(arr[i]);
        }
    }
    return arrNew;
};