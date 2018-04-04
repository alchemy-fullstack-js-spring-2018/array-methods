module.exports = {
    
    holeCheck(arr, i) {
        if(!arr.hasOwnProperty(i)) return true;
        return false;
    },

    map(arr, callback) {
        const newArray = [];
        for(let i = 0; i < arr.length; i++) {
            if(this.holeCheck(arr, i)) continue;
            newArray[i] = callback(arr[i]);
        }
        return newArray;
    },

    filter(arr, callback) {
        const newArray = [];
        for(let i = 0; i < arr.length; i++) {
            if(this.holeCheck(arr, i)) continue;
            if(callback(arr[i])) newArray.push(arr[i]);
        }
        return newArray;
    },

    findIndex(arr, callback) {
        let evenIndex = -1;
        for(let i = 0; i < arr.length; i++) {
            if(this.holeCheck(arr, i)) continue;
            if(callback(arr[i])) return evenIndex = i;
        }
        return evenIndex;
    },

    reduce(arr, callback, acc) {
        let sumOfArray = arr[0];
        if(acc) {
            sumOfArray = acc;
            for(let i = 0; i < arr.length; i++) {
                if(this.holeCheck(arr, i)) continue;
                sumOfArray = callback(sumOfArray, arr[i]);
            }} else {
            for(let i = 1; i < arr.length; i++) {
                if(this.holeCheck(arr, i)) continue;
                sumOfArray = callback(sumOfArray, arr[i]);
            }
        }
        return sumOfArray;
    },

    every(arr, callback) {
        let evenCheck = true;
        for(let i = 0; i < arr.length; i++) {
            if(this.holeCheck(arr, i)) continue;
            if(!callback(arr[i])) return evenCheck = false;
        }
        return evenCheck;
    }

};