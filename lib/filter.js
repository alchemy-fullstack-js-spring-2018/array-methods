

module.exports = function filter(arr, callback) {
    let result = [];

    for(let i = 0; i < arr.length; i++) {
        const boolean = callback(arr[i]);
        if(boolean){
            result[result.length] = arr[i];
        }
    }
    return result;
};