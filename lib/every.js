module.exports = function every(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        const result = callback(arr[i]);
        if(result === true) { 
            continue;
        } else {
            return false;
        }
    } return true;
};