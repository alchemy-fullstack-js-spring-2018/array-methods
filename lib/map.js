module.exports = function map(array, callback) {
    const result = [];
    for(let i = 0; i < array.length; i++) {
        const alteredElement = callback(array[i]);
        result.push(alteredElement);
    }
    return result;
};