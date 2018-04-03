function reduce(arr, callback, initialValue){
    let acc;

    (initialValue == undefined) ? acc = arr[0] : acc = initialValue;

    for(let i = 0; i < arr.length; i++){
        if(initialValue === undefined && i === 0) i++;
        acc = callback(acc, arr[i], i);  
    }
    return acc;
}

module.exports = reduce;