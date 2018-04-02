module.exports = {
    myMap(array, callback) {
        let newArray = [];
        for(let i = 0; i < array.length; i++) {
            newArray.push((callback(array[i])));
        }
        return newArray;
    }
};