module.exports = { 

    map(arr, callback) {
        let newArray = [];
        for(let i = 0; i < arr.length; i++) {
            newArray[i] = callback(arr[i]);
        }
        return newArray;
    },

    filter(arr, callback) {
        let newArray = [];
        for(let i = 0; i < arr.length; i++) {
            if(callback(arr[i])) {
                newArray[newArray.length] = arr[i];
            }
            return newArray;
        }
    },

    findIndex(arr, callback) {
        for(let i = 0; i < arr.length; i++) { 
            if(callback(arr[i])) return i;
        }
        return -1;
    },

    forEach(arr, callback) {
        for(let i = 0; i < arr.length; i++) {
            if(!arr.hasOwnProperty(i)) continue;
            callback(arr[i]);       
        }
    },
    every(arr, callback) {
        for(let i = 0; i < arr.length; i++){
            if(!callback(arr[i])) return false;
        }
        return true;
    }
};
    