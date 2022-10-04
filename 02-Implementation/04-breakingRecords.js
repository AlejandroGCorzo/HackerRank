//https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true

function breakingRecords(scores) {
  // Write your code here
  let records = { minimum: scores[0], maximum: scores[0], min: 0, max: 0 };
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] < records.minimum)
      records = { ...records, minimum: scores[i], min: records.min + 1 };
    if (scores[i] > records.maximum)
      records = { ...records, maximum: scores[i], max: records.max + 1 };
  }
  return [records.max, records.min];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
