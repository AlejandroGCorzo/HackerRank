//https://www.hackerrank.com/challenges/electronics-shop/problem?isFullScreen=true

function getMoneySpent(keyboards, drives, b) {
  // Write your code here.
  let result = -1;
  keyboards.forEach((keybo) =>
    drives.forEach((usb) => {
      let sum = keybo + usb;
      sum <= b && sum > result ? (result = sum) : null;
    })
  );
  return result;
}

console.log(getMoneySpent([4], [5], 5));
