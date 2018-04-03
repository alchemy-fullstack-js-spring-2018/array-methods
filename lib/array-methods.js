module.exports = {

    map(arr, callback) {
        const result = [];
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === undefined) {
                result.push(undefined);
                continue;
            }
            result.push(callback(arr[i], i));
        }
        return result;
    },

    filter(arr, callback) {
        const result = [];
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === undefined) continue;
            if(callback(arr[i])) {
                result.push(arr[i]);
            }
        }
        return result;
    },

    findIndex(arr, item) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === item) return i;
        }
        return -1;
    },

    reduce(arr, callback, init) {
        let accum;
        if(init === undefined){
            accum = arr[0];
        } else accum = init;
        for(let i = 0; i < arr.length; i++) {
            if(init === undefined && i === 0) {
                i = 1;
            }
            accum = callback(accum, arr[i], i);
        }
        return accum;
    },

    every(arr, callback) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === undefined) continue;
            else if(!callback(arr[i], i)) return false;
        }
        return true;
    },

    forEach(arr, callback) {
        for(let i = 0; i < arr.length; i++) {
            callback(arr[i], i);
        }
    }
};
