//https://www.hackerrank.com/challenges/day-of-the-programmer/problem?isFullScreen=true

function dayOfProgrammer(year) {
  // Write your code here

  var leap = 0; //make 1 if it is a leap yearear...remove a dayear
  if (year < 1918) {
    if (year % 4 === 0) {
      leap = -1;
    }
    return `${13 + leap}.09.${year}`;
  } else if (year > 1918) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      leap = -1;
    }
    return `${13 + leap}.09.${year}`;
  } else {
    //case for 1918
    return '26.09.1918';
  }

  // return year % 4 === 0 ? `12.09.${year}` : `13.09.${year}`;
}

console.log(dayOfProgrammer(2017));
