//https://www.hackerrank.com/challenges/drawing-book/problem?isFullScreen=true

function pageCount(n, p) {
  // Write your code here
  let start = Math.floor(p / 2);
  let end = Math.floor(n / 2 - start);
  console.log(start, end);
  return start < end ? start : end;
}

console.log(pageCount(5, 4));
