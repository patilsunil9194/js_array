const store = [
  { product: "laptop", value: 1000, count: 3 },
  { product: "Desktp", value: 2000, count: 2 },
  { product: "mobile", value: 550, count: 10 },
];

const totalValue = store.reduce(
  (acc, item) => acc + item.value * item.count,
  0
);

console.log(totalValue)