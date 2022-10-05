//https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true

function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let howMany = [];
  ar.forEach((el1, index1) => {
    ar.forEach((el2, index2) => {
      if (
        (el1 + el2) % k === 0 &&
        index1 !== index2 &&
        !howMany.some((el) => el[0] === index2 && el[1] === index1)
      )
        howMany.push([index1, index2]);
    });
  });
  return howMany.length;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
