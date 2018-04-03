module.exports = { 
    map(array, callback){
        let results = [];
        results.length = array.length
        for(i = 0; i < array.length; i++){
            
            results[i] = callback(array[i]);
        }
        return results ;
    },
    
    filter(array, callback){
        let results = [];
        for(i = 0; i <array.length; i++) {
            
            if(callback(array[i])) {
                
                results.push(array[i]) 
            }
        
        }
        return results;
    }
    // findIndex(array, callback){

    // }
    // reduce(array, callback){

    // }

//  function square(x) {
//      return x * x;
// }





};