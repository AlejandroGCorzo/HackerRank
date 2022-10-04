//https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true

function getTotalX(a, b) {
  // Write your code here
  let validCount = 0;
  for (let x = 1; x <= 100; x++) {
    if (a.every((el) => x % el === 0)) {
      if (b.every((el) => el % x === 0)) {
        validCount++;
      }
    }
  }

  return validCount;
}

console.log(getTotalX([2, 4], [16, 32, 96]));
