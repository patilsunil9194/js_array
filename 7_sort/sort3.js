const products = [
  { name: "laptop", price: 1000 },
  { name: "desktop", price: 3000 },
  { name: "phone", price: 700 },
];

products.sort((a, b) => a.price - b.price);
console.log(products);
