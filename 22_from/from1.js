// from - used to convert a shallow-copied array instance from an array - like or iterable object (string, array, set, etc).

const str = "123456789";

// string array
const res = Array.from(str);

// convert number

const numbers = Array.from(str, convertFun);

function convertFun(x) {
  return Number(x);
}

console.log(res); // [ '1', '2', '3','4', '5', '6','7', '8', '9']

console.log(numbers); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
