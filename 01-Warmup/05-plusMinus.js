//https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true

function plusMinus(arr) {
  // Write your code here
  let aux = arr.reduce(
    (ac, el) => {
      if (el > 0) {
        ac[2] += 1;
        return ac;
      }
      if (el < 0) {
        ac[0] += 1;
        return ac;
      }
      ac[1] += 1;
      return ac;
    },
    [0, 0, 0]
  );
  console.log(aux[2] / arr.length);
  console.log(aux[0] / arr.length);
  console.log(aux[1] / arr.length);
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
