//https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

function birthdayCakeCandles(candles) {
  // Write your code here
  let biggestCandle = candles[0];
  let cuantity = 1;
  for (let i = 1; i < candles.length; i++) {
    if (candles[i] > biggestCandle) {
      biggestCandle = candles[i];
      cuantity = 1;
      continue;
    }
    candles[i] === biggestCandle ? (cuantity += 1) : null;
  }
  return cuantity;
}

console.log(birthdayCakeCandles([3, 2, 4, 1, 3]));
