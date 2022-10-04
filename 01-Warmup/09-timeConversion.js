//https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true

function timeConversion(str) {
  // Write your code here
  let hour = Number(str.slice(0, 2));
  if (str.slice(8) === 'AM') {
    return `${
      hour === 12 ? '00' : String(hour).length === 1 ? '0' + hour : hour
    }${str.slice(2, 8)}`;
  }
  if (str.slice(8) === 'PM') {
    return `${hour < 12 ? hour + 12 : hour}${str.slice(2, 8)}`;
  }
}

console.log(timeConversion('01:05:45AM'));
