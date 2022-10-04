//https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true

function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  let dif = Math.abs(x2 - x1);
  while (dif > Math.abs(x2 + v2 - (x1 + v1))) {
    x1 += v1;
    x2 += v2;
    if (x1 === x2) return 'YES';
  }
  return 'NO';
}

console.log(kangaroo(0, 3, -4, 2));
console.log(kangaroo(0, 2, 5, 3));
