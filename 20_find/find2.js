const persons = [
  { name: "Rock", Weight: 90 },
  { name: "Big Show", Weight: 180 },
  { name: "Bruslee", Weight: 70 },
  { name: "John Cena", Weight: 80 },
  { name: "Ken", Weight: 90 },
];

const res = persons.find(findPerson);
const weight = persons.find(findPerson).Weight;

function findPerson(person) {
  return person.name === "Bruslee";
}

console.log(res); // { name: 'Bruslee', Weight: 70 }

console.log(weight); // 70
