const persons = [
  { name: "Devid" },
  { name: "Sam" },
  { name: "Sachin" },
  { name: "Sehwag" },
  { surname: "Kumble" },
];

const res = persons.every((person) => person.name !== undefined);
console.log(res); // false
