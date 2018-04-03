module.exports = {
    myFilter(array, callback) {
        let newArray = [];
        for(let i = 0; i < array.length; i++) {
            if((callback(array[i]) === true)) {
                newArray[newArray.length] = array[i];
            }
        }
        return newArray;
    }
};