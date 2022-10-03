function compareTriplets(a, b) {
  return a.reduce(
    (ac, el, ind) => {
      if (el > b[ind]) {
        ac[0] += 1;
        return ac;
      }
      if (el < b[ind]) {
        ac[1] += 1;
        return ac;
      }
      return ac;
    },
    [0, 0]
  );
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
