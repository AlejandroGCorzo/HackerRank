//https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true

function simpleArraySum(ar) {
  // Write your code here
  return ar.reduce((ac, el) => ac + el, 0);
}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));
