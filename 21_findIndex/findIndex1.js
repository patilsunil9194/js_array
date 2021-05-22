// findIndex - used to find and return the index of the element from given array which meets the criteria.
// if it cannot find an element it will return -1.

const numbers = [1, 2, 3, 4, 3, 5];

const res = numbers.findIndex(findNumer);

function findNumer(value) {
  return value === 3;
}

console.log(res); // 2
