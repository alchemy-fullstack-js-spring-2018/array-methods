module.exports = { 
    map(array, callback){
        let emptyArray = [];
        emptyArray.length = array.length
        for(i = 0; i < array.length; i++){
            
            emptyArray[i] = callback(array[i]);
        }
        return emptyArray ;
    }
    // filter(array, callback){

    // }
    // findIndex(array, callback){

    // }
    // reduce(array, callback){

    // }

//  function square(x) {
//      return x * x;
// }





};