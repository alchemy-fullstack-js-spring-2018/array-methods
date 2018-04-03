module.exports = {
    myReduce(array, callback, initialValue) {
        let accumulator = array[0];
        for(let i = 1; i < array.length; i++) {
            accumulator = callback(accumulator, array[i]);
        }
        if(initialValue) {
            accumulator += initialValue;
        }
        return accumulator;
    }
};