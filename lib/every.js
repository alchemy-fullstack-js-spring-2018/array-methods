module.exports = {
    myEvery(array, callback) {
        for(let i = 0; i < array.length; i++) {
            if((callback(array[i]) === true)) {
                continue;
            } else {
                return false;
            }
        }
        return true;
    }
};