let s = "abab";
let map = {};

for (i = 0; i < s.length; i++) {
  if (!map[s[i]]) {
    map[s[i]] = 1;
  } else {
    map[s[i]]++;
  }
  let nonRepeatingChar = -1;
  //   for (let j = 0; j <= i; j++) {
  //     if (map[s[j]] == 1) {
  //       nonRepeatingChar = s[j];
  //       break;
  //     }
  //   }
  // or

  while (k <= 1) {
    if (map[s[k]] == 1) {
      nonRepeatingChar = s[k];
      break;
    }
    k++;
  }

  console.log(map);
  console.log(nonRepeatingChar);
}
