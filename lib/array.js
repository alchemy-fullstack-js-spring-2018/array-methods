module.exports = {
    map(arr, callback) {
        let newArray = [];
        for(let i = 0; i < arr.length; i++){
    
            const el = arr[i];
            const answer = callback(el);
            newArray.push(answer);
        }
        return true;
    }
};
