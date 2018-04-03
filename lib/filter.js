module.exports = function filter(arr, callback) {
    const filterArr = [];
    for(let i = 0; i < arr.length; i++) {
        const result = callback(arr[i]);
        if(result === true)filterArr.push(arr[i]);
    }
    return filterArr;
};