//https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true

function miniMaxSum(arr) {
  // Write your code here
  arr.sort();
  console.log(
    `${arr.slice(0, 4).reduce((ac, el) => ac + el, 0)} ${arr
      .slice(1, 5)
      .reduce((ac, el) => ac + el, 0)}`
  );
}

console.log(miniMaxSum([1, 3, 2, 5, 4]));
