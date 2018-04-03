function filter(array, callback) {
    let result = [];

    for(let i = 0; i < array.length; i++) {
        if(callback(array[i], i) == true){
            result.push(array[i]);
        }
    }
    return result;
}

module.exports = filter;