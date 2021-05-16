const arrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const res = arrays.every((arr) => Array.isArray(arr));
console.log(res); // true
