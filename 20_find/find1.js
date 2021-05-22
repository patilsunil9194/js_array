// find - used to find and return the elememt from a given array which meets the criteria.
// if it cannot find an element it will return undefined.

const names = ["John", "Rock", "Shown", "ThripleH", "Goldbarg"];

let res = names.find(findSomeOne);

function findSomeOne(item) {
  return item === "ThripleH";
}

console.log(res);
