const numbers = [1, 2, 3, 2, 3, 5, 6, 6, 7, 4];

const nums = numbers.filter((value, index, arr) => {
  return arr.indexOf(value) === index;
});

console.log(nums);
