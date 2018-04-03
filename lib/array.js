module.exports = {
    map(arr, callback) {
        const array = [];
        for(let i = 0; i < arr.length; ++i) {
            const result = callback(arr[i]);
            array[array.length] = result;
        }
        return array;
    },

    filter(arr, callback) {
        const array = [];
        for(let i = 0; i < arr.length; ++i) {
           const result = callback(arr[i]);
           if(result === true) {
            array[array.length] = arr[i];
           }
        }
        return array;
    },

    findIndex(arr, callback) {
        for(let i = 0; i < arr.length; ++i) {
            const result = callback(arr[i]);
            if(result) {
                return i;
            }
        }
        return -1;
    },

    reduce(arr, callback) {
        let result = 0;
        for(let i = 0; i < arr.length; ++i) {
            result = callback(arr[i], result);
        }
        return result;
    },

    every(arr, callback) {
        let test = 0;
        for(let i = 0; i < arr.length; ++i) {
            const result = callback(arr[i]);
            if (result == true) {
                ++test;
            } else {
                break;
            }
        }
        if (test === arr.length) {
            return true;
        } else {
            return false;
        }
    }



}
