const players = [
  {
    name: "Sachin",
    hundred: 100,
  },
  {
    name: "Sehwag",
    hundred: 50,
  },
  { name: "Dravid", hundred: 74 },
  { name: "Rohit", hundred: 39 },
];

const res = players.some(isLessFourty);

function isLessFourty(player) {
  return player.hundred > 40;
}

console.log(res); // true
