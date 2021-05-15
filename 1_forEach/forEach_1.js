const numbers = [1, 2, 3, 4, 5];
let sum = 0;

numbers.forEach(consoleItem);
function consoleItem(item, index, arr) {
    sum += item;
}

console.log(sum);
