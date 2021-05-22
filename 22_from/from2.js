const numbers = [1, 2, 3, 3, 1, 5, 2, 4];

const res = Array.from(new Set(numbers));

console.log(res); // [ 1, 2, 3, 5, 4 ]
