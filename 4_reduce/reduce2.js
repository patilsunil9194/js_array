const numbers = [1, 2, 3, 10, 5, 6, 7];

const max = numbers.reduce(callback, -Infinity);

function callback(accumulator, value) {
  return accumulator > value ? accumulator : value;
}

console.log(max)