function findIndex(array, callback){
    let indexCounter = 0;
    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
            return indexCounter;
        } else {
            indexCounter++;
        }
    }
}

module.exports = findIndex;