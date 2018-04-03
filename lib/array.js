module.exports = { 
    map(array, callback){
        const emptyArray = [];
        for(i = 0; i < array.length; i++){
            emptyArray.push(array[i] * array[i]);
        }
        return emptyArray;
    }

//  function square(x) {
//      return x * x;
// }





};