// reduce - used to execute a callback function (or a reducer function) on each element of the array resulting in a single output value.
// The reducer function's returned value is assigned to the accumulator, 
// which can be used across each iteration and ultimately becomes the final, single resulting value.

const numbers = [1, 2, 3, 4, 5];

// reduce(callback,initialValue)
const total = numbers.reduce(sum, 0);

//accumulator - keep last return result
function sum(accumulator, value, index, arr) {
  return (accumulator + value);
}

console.log(total);
