// fill - used to change the elements inside of an array with a specific value. Optionally we can provide a start and an end index.

const numbers = [1, 2, 3, 4, 5];
const numbers1 = [1, 2, 3, 4, 5];

// to fill all array elements
numbers.fill(0);

// to fill elements with start and end index
// fill(value, startIndex, endIndex);
numbers1.fill(0, 2, 4);

console.log(numbers); // [ 0, 0, 0, 0, 0 ]

console.log(numbers1); // [ 1, 2, 0, 0, 5 ]
