//https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true

function sockMerchant(n, arr) {
  // Write your code here
  let i = 0;
  arr.sort();
  console.log(arr);
  let answer = 0;
  while (arr.length) {
    if (arr[0] === arr[1]) {
      answer++;
      arr.shift();
      arr.shift();
    } else arr.shift();
  }
  return answer;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
