module.exports = function filter(arr, callback) {
    const filterArr = [];
    let counter = 0;
    for(let i = 0; i < arr.length; i++) {
        const result = callback(arr[i]);
        if(result === true) {
            filterArr[counter] = (arr[i]);
            counter++;
        }
    }
    return filterArr;
};