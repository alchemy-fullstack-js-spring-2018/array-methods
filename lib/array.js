module.exports = { 
    map(array, callback){
        let results = [];
        results.length = array.length
        for(let i = 0; i < array.length; i++){
            
            results[i] = callback(array[i]);
        }
        return results ;
    },
    
    filter(array, callback){
        let results = [];
        for(let i = 0; i <array.length; i++) {
            
            if(callback(array[i])) {
                
                results[results.length] = (array[i]); 
            }
        
        }
        return results;
    },
     findIndex(array, callback){
        let results = [];

        for(let i = 0; i < array.length; i++) {

            if(callback(array[i])) {
                return i;
            }
        }

     },

    reduce(array, callback, initialValue){
        let result = array[0];
        let startIndex = 1;
        if(initialValue) {
            startIndex = 0;
            result = initialValue;
        }
       

        for (let i = startIndex; i < array.length; i++) {
            result = callback(result,(array[i]));
      
        }
        return result;
    },

    every(array, callback) {

        //if(!callback(array[i]) return false;) 
        //if not truthy just return false and leave loop.
        //return true;

        for(let i = 0; i < array.length; i++) { 

            if(!callback(array[i])) {
                return false; 
            }

        }
        return true;
    }
}; 
