// flat - used to create new array with all sub-array elements concatenated into it.
// the default depth value is 1, but you can provide infinity if you want to have all the arrays flatten out.

const arr = [1, [2, [3, [4, [5, 6]]]]];

console.log(arr.flat()); // [ 1, 2, [ 3, [ 4 ,[5]] ] ]

console.log(arr.flat(3)); // [ 1, 2, 3, 4,[5]]

console.log(arr.flat(Infinity)); // [ 1, 2, 3, 4, 5]
