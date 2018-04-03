
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
    // filter(array, callback) {
    //     let evensArray = [];
    //     for(let i = 0; i < array.length; i++) {
    //         if(i % 2 == 0){
    //             const evensAnswer = callback(array[i]);

    //             evensArray.push(evensAnswer);
    //         }
    //         return evensArray;
 
    //     }
    // },

    findIndex(array, callback) {
        let result = -1;
        for(let i = 0; i < array.length; i++) {
            if(callback(array[i], i) == true){
                result = i
            }    
            return result;
        }
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