// concat - used to merge two or more an array together without modifying the arrays but instead creating a new one.
const a = [1, 2, 3];
const b = [4, 5, 6];
const d = [7, 8, 9];
const c = a.concat(b);
console.log(c); // [ 1, 2, 3, 4, 5, 6 ]
const e = a.concat(b, d);
console.log(e) 
/*[
    1, 2, 3, 4, 5,
    6, 7, 8, 9
  ] */