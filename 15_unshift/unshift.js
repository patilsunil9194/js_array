// unshift - used to add one or more items at the beginning of an an array.
// this method will also return the length of the new array

const numbers = [1, 2, 3, 4, 5];

let length = numbers.unshift(0, -1);

console.log(numbers); // [ 0,-1, 1, 2, 3, 4, 5 ]
console.log(length); // 7
