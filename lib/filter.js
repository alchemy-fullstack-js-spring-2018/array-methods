

module.exports = function filter(arr, callback) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        const boolean = callback(arr[i]);
        if(boolean) result.push(arr[i]);
    }
    return result;
};