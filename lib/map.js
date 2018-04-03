module.exports = {
    myMap(array, callback) {
        let newArray = [];
        for(let i = 0; i < array.length; i++) {
            newArray[(newArray.length)] = callback(array[i]);
        }
        return newArray;
    }
};