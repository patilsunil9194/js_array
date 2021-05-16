// indexOf and lastIndexOf - used in order to retrieve the index at which an item is found inside of an array.
// if the element is not inside the array, the methods will return -1

const names = ["Devid", "Sam", "Max", "Ken", "Smith", "Max"];

const idx = names.indexOf("Sam");
names[idx] = "Sunil";

let idx_max = names.indexOf("Max");
let last_idx_max = names.lastIndexOf("Max");

console.log(names); //[ 'Devid', 'Sunil', 'Max', 'Ken', 'Smith' ]
console.log(idx_max); //  2
console.log(last_idx_max);  // 5