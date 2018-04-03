module.exports = {
    myFindIndex(array, callback) {
        let response = -1;
        for(let i = 0; i < array.length; i++) {
            if((callback(array[i])) === true) {
                response = i;
                break;
            }
        }
        return response;
    }
};