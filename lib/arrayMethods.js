
module.exports = {

  
    map(arr, callback) {
        let newArray = [];
        for(let i = 0; i < arr.length; i++){
           
            const el = arr[i];
            const answer = callback(el);
            newArray.push(answer);
        }
        return newArray;
    },
   
    filter(array, callback) {
        let result = [];
    
        for(let i = 0; i < array.length; i++) {
            if(callback(array[i]) == true){
                result.push(array[i]);
            }
        }
        return result;
    },

    findIndex(array, callback) {
        for(let i = 0; i < array.length; i++) {
            if(array[i] === callback) return i;
        }
        return -1;
    },


    reduce(array, callback, init) {
        var accum;
        if(init === undefined){
            accum = array [0];
        } else {
            accum = init;
        }
        for(let i = 0; i < array.lenght; i++) {
            if(init === undefined && i === 0) {
                i = 1;
            }
            accum = callback(accum, array[i], i);
        }
        return accum;
    },
    every(array, callback) {
        for(let i = 0; i < array.length; i++) {
            if(!callback(array[i], i)) {
                return false;
            }
        }
        return true;
    },


};