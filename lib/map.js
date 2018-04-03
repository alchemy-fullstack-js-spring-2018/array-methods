module.exports = function map(array, callback) {
    const result = [];
    for(let i = 0; i < array.length; i++) {
        const newElement = callback(array[i]);
        result[i] = newElement;
    }
    return result;
};