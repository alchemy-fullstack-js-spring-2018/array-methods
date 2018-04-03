module.exports = function filter(arr, callback) {
    const filtered = [];
    for(let i = 0; i < arr.length; i++) {
        const index = arr[i];
        const result = callback(index);
        if(result) filtered.push(index);
    }
    return filtered;
};