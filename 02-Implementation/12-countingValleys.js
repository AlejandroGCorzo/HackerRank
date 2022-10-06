//https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true

function countingValleys(steps, path) {
  // Write your code here
  let where = 0;
  let valleys = 0;
  for (let i = 0; i < path.length; i++) {
    if (path[i] === 'D') {
      if (!where) valleys++;
      where--;
    } else {
      where++;
    }
  }
  return valleys;
}

console.log(countingValleys(8, 'UDDDUDUU'));
