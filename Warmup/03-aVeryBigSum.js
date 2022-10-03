//https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true

function aVeryBigSum(ar) {
  // Write your code here
  return ar.reduce((ac, el) => ac + el, 0);
}

console.log(
  aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
);
