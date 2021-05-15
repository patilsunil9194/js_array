const products = [
  {
    name: "laptop",
    price: 1000,
    count: 2,
  },
  {
    name: "desktop",
    price: 1500,
    count: 4,
  },
  {
    name: "phone",
    price: 500,
    count: 6,
  },
];

const totalProduct = products.map((item) => ({
  name: item.name,
  total: item.price * item.count,
}));

console.log(totalProduct);
