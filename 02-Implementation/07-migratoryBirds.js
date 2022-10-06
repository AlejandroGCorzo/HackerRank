//https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true

function migratoryBirds(arr) {
  // Write your code here
  let obj = {};
  let value = 0;
  let cuant = 0;
  arr.forEach((el) => {
    obj[el] ? obj[el]++ : (obj[el] = 1);
  });
  console.log(Object.entries(obj));

  for (const key in obj) {
    if (cuant < obj[key]) {
      cuant = obj[key];
      value = key;
    }
  }

  return value;
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
// console.log(migratoryBirds([2, 2, 2, 1, 1, 1, 3, 3, 3]));
