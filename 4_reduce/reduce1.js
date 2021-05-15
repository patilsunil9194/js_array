const numbers = [1, 2, 3, 4, 5];

// reduce(callback,initialValue)
const total = numbers.reduce(sum, 0);

//accumulator - keep last return result
function sum(accumulator, value, index, arr) {
  return (accumulator + value);
}

console.log(total);
