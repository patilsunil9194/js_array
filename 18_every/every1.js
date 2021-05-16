// every - used to check if all of the values from an array return a truthly value
// when they are passed through a callback function.

const numbers = [1, 2, 3, 4, 5];

const res = numbers.every(isPositive);

function isPositive(item) {
  return item > 0;
}

console.log(res); // true
