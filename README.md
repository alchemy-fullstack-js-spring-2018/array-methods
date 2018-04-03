Array Methods Lab
===

## API

### `map(array, callback)`

Applies a callback function to each instance in an array and returns the new array.

### `filter(array, callback)`

Applies a callback function to each instance in an array and filters out all instances that are false and returns a new array of the true instneces.

### `findIndex(array, callback)`

Applies a callback function to each instance in an array and returns the index of the first true instance. It will return -1 if no instances are true.

### `reduce(array, callback [, initialValue])`

Will apply a callback function to an array of numbers and return you a single number. Ther is an optional third argument of an initialValue.

### `every(array, callback)`

Applies a callback function to each instance in an array and returns true if all instance are true, but will return false if at least one instance is false. 