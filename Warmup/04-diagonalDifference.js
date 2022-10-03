//https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true

function diagonalDifference(arr) {
  // Write your code here
  let diagonal = arr.reduce(
    (ac, el, ind) => ac + el[ind] - arr[arr.length - 1 - ind][ind],
    0
  );
  return diagonal > 0 ? diagonal : diagonal * -1;
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
