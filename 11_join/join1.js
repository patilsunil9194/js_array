/* join - used to join an array of items into a single string
 seperated by a separator. By default the seperator is a comma, nut we can provide another separator if it's required  */

const countries = ["Australia", "India", "USA", "England"];

let str = countries.join();
let str1 = countries.join("#");

console.log(str); // Australia,India,USA,England
console.log(str1) // Australia#India#USA#England