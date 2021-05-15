const people = [
  { name: "Sunil", age: 18 },
  { name: "Ram", age: 16 },
  { name: "Shyam", age: 18 },
  { name: "Rajiv", age: 17 },
];

const adults = people.filter((value) => value.age >= 18);

console.log(adults)