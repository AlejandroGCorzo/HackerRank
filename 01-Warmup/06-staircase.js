//https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true

function staircase(n) {
  // Write your code here
  let stair = '';
  let where = n;
  while (where > 0) {
    for (let i = 1; i <= n; i++) {
      where <= i ? (stair += '#') : (stair += ' ');
    }
    stair += '\n';
    where--;
  }
  console.log(stair);
}

console.log(staircase(4));
