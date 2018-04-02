module.exports = {
    map(arr, callback) {
        const result = [];
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === undefined) {
                result.push(undefined);
                continue;
            }
            result.push(callback(arr[i], i));
        }
        return result;
    },


};

// ****************************************************************************** 

// `map(array, callback)`
// Takes a callback of signature `(item) => {}` 
// and creates a new array with the return value of each called callback. 

// Skips any holes in the array, and mapped array should have hole in same spot. The mapped array should have
// the same `.length` value as the original array.

// Returns the "mapped" new array.

// ****************************************************************************** 

// `filter(array, callback)`

// Takes a callback of signature `(item) => {}` 
// and creates a new array with all items whose callback returned `true` or a truthy value. 

// Any holes in the array should be skipped (don't call the callback function, it always "fails" predicate).

// Returns the new array of "filtered" items.

// ********** 

// `findIndex(array, callback)`

// Takes a callback of signature `(item) => {}` 
// and returns the index of the first item whose callback returns `true` or a truthy value.

// Any holes in the array should be skipped (don't call the callback function, it always "fails" predicate).

// Returns the index of the found item, `-1` if no item is found.

// ****************************************************************************** 

// `reduce(array, callback [, initialValue])`

// Takes a callback of signature `(accumulator, item) => {}` and an (optional) 
// second `initialValue` parameter that is the initial value of the accumulator. After each function
// call, the return value is passed as the accumulator argument of the next function call.

// If the second `initialValue` parameter is not supplied, the first function call should be the 
// first item as the `accumulator`, and the second array item as the `item`.

// Any holes in the array should be skipped (don't call the callback function).

// Returns the final accumulator value.

// *****************************************************************************

// `every(array, callback)`

// Takes a callback of signature `(item) => {} 
// and returns an overall `true` value if **all** callback return `true` or a truthy value.

// Any holes in the array should be skipped (don't call the callback function).

// Returns the `true` if every item in the array has returned `true`, otherwise `false`.

// *****************************************************************************
// ## Challange

// ### `foreach(array, callback)`

// Takes a callback of signature `(item, index) => {}` 
// and calls that function for each item in the array.

// HINT: To test `foreach`, you'll need to use a closure variable to "store" the calls to the callback function.

// Any holes in the array should be skipped (don't call the callback function).

// Returns `undefined`.

// ******************************************************************************
// ### Test indexes

// All of these methods can supply the current index as the second (or third in the case of `reduce`) paramter. Test and
// implement this functionality. Since all of these methods (except reduce) have virtually the same implementation for testing whether the callback function was called with the correct index. Can you create a single function in your test file that
// all of the index tests (except reduce) call to test index functionality?

// ### Array Holes

// This part of the lab is optional, but recommended if you want to push yourself. Do this part incrementally 
// _after you have completed_ the primary requirements.

// An array hole is a "not defined" index property on an array. For example, `const arr = [1,,3]` 
// will have a "hole" meaning there is no index 1 defined for that array. 
// This is different than `const arr = [1, undefined, 3]` because the array _will_ have an index 1 defined for 
// the array, but it's value will be `undefined`.

// You can best understand this by looking at the `console` output for the following arrays, 
// one with holes, and one with the value `undefined` in each element of the array:
