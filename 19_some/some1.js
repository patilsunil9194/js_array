// some - used to check if at least one item from the array returns a truthy value when passed to a given callback.

const numbers = [1, 2, 3, 4, 5];

let res = numbers.some(greaterThanFour);

function greaterThanFour(item) {
  return item > 5;
}

console.log(res); // false
