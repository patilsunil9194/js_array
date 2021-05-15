const numbers = [101, 22, 93, 4, 55, 22, 21];
numbers.sort(campareFunction);
console.log(numbers);

function campareFunction(a, b) {
  // 1. < 0 ... a comes first
  // 2. 0  ... nothing to change
  // 3. > 0   ... b comes first

  return a - b;
}
