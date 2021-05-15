// splice - used to remove or replace existing items and/or add new elements inside an array.
const numbers = [1, 2, 3, 4, 5];

// splice(startIndex,deleteCount) - if deleteCount set 0 then not delete item
const deletedItem = numbers.splice(2, 3);

const deleteUpdate = numbers.splice(1, 1, 6, 8, 9);

console.log(numbers); //output - [1,2]
console.log(deletedItem); // output- [ 3, 4, 5 ]
console.log(deleteUpdate); // output - [2]
console.log(numbers); // output - [ 1, 6, 8, 9 ]
