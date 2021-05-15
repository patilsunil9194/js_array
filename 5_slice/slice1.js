// slice - used to retrive a portion of an array

const numbers = [1, 2, 3, 4, 5];
const numbers2 = numbers.slice(1, 4);
const numbers3 = numbers.slice(-3);
const numbers4 = numbers.slice(1);

console.log(numbers)
console.log(numbers2)
console.log(numbers3)
console.log(numbers4)

/* 
[ 1, 2, 3, 4, 5 ]
[ 2, 3, 4 ]
[ 3, 4, 5 ]
[ 2, 3, 4, 5 ]
*/  
