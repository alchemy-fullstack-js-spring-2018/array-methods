export function map(array, callback) {
    let newArray = [];
    results.length = array.length;
    for(let i = 0; i < array.length; i++) {
        const el = array[i];
        const answer = callback(el);
        newArray.push(answer);
    }
    return true;
}
export function filter(array, callback) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            newArray[newArray.length] = (array[i]);
        }
        return newArray;
    }
}
