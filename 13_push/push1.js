// push - used to add one or more elements at the end of the an array.
// this method also return the length of the array which now containers the new elements.

const numbers = [1, 2, 3, 4, 5];

let length = numbers.push(3, 5);

console.log(numbers); // [1,2,3,4,5,3,5]
console.log(length); // 7
