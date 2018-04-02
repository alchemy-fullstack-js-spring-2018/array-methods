

module.exports = function findIndex(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        const boolean = callback(arr[i]);
        if(boolean){
            const result = i;
            return result;
        }
    }
    return -1;
};