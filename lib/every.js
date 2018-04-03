module.exports = function every(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        const result = callback(arr.length[i]);
        if(result === true) { 
            return true;
        } else {
            return false;
        }
    }
};