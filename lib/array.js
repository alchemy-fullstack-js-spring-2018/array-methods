module.exports = {
    map(arr, callback) {
        const array = [];
        for(let i = 0; i < arr.length; ++i) {
            const result = callback(arr[i]);
            array.push(result);
        }
        return array;
    },

    filter(arr, callback) {
        const array = [];
        for(let i = 0; i < arr.length; ++i) {
           const result = callback(arr[i]);
           if(result) {
            array.push(arr[i]);
           }
        }
        return array;
    },

    findIndex(arr, callback) {
        for(let i = 0; i < arr.length; ++i) {
            const result = callback(arr[i]);
            if(result) {
                return true;
            }
        }
        return false;
    }







}
