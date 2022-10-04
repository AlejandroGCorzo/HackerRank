//https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true

function gradingStudents(grades) {
  // Write your code here
  for (let i = 0; i < grades.length; i++) {
    console.log(grades[i] % 5);
    let rest = grades[i] % 5;
    rest >= 3 && grades[i] > 37 ? (grades[i] = grades[i] + 5 - rest) : null;
  }
  return grades;
}

console.log(gradingStudents([73, 67, 38, 33]));
