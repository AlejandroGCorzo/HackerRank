//https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true

function bonAppetit(bill, k, b) {
  // Write your code here
  bill = bill.reduce((ac, el, index) => (index !== k ? ac + el : ac), 0) / 2;

  console.log(b - bill === 0 ? 'Bon Appetit' : b - bill);
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12));
