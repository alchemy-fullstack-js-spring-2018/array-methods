
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
        let evensArray = [];
        for(let i = 0; i < array.length; i++) {
            if(i % 2 == 0){
                const evensAnswer = callback(array[i]);

                evensArray.push(evensAnswer);
            }
            return evensArray;
 
        }
    }

};