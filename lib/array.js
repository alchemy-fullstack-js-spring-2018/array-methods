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
           if(arr[i] > 2) {
            array.push(arr[i]);
           }
        }
        return array;
    }







}
