module.exports = {

    map(arr, callback) {
        const newArray = [];
        for(let i = 0; i < arr.length; i++) {
            newArray.push(callback(arr[i]));
        }
        return newArray;
    },

    filter(arr, callback) {
        const newArray = [];
        for(let i = 0; i < arr.length; i++) {
            if(callback(arr[i])) newArray.push(arr[i]);
        }
        return newArray;
    },

    findIndex(arr, callback) {
        let evenIndex = -1;
        for(let i = 0; i < arr.length; i++) {
            if(callback(arr[i])) return evenIndex = i;
        }
        return evenIndex;
    }

};