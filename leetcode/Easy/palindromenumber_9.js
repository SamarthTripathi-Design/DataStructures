let isPalindrome = function (x) {
  let intStr = x.toString();
  let diff = intStr.length / 2;
  for (i = 0; i < diff; i++) {
    if (intStr[i] !== intStr[intStr.length - i - 1]) {
      return false;
    }
  }
  return true;
};
const x = 10101;

console.log(isPalindrome(x));
