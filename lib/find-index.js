module.exports = function findIndex(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        const result = callback(arr[i]);
        if(result === true) { 
            return i;
        } else {
            continue;
        }
    } return false;
};