const romanToInt = function (s) {
  let result = 0;
  const sym = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (i = 0; i < s.length; i++) {
    let curr = sym[s[i]];
    let next = sym[s[i + 1]];
    console.log(curr + "  " + next);

    if (curr < next) {
      result += next - curr;
      console.log(result);
      console.log("--------");
      i++;
    } else {
      result += curr;
      console.log(result);
      console.log("--------");
    }
  }
  return result;
};

const s = "MCMXCIV";
// const s = "IXII";
console.log(romanToInt(s));
