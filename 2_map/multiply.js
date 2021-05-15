const numbers = [1, 2, 3, 4, 5];

const numbersMultiply = numbers.map(multiply);
const numbersDouble = numbers.map(doubleNum);

function doubleNum(value) {
  return value * 2;
}

function multiply(value, index, arr) {
  return value * index;
}

console.log(numbersMultiply);
console.log(numbersDouble);
