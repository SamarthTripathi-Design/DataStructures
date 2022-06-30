const twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = 0; j < nums.length; j++) {
      if (i == j) {
        continue;
      } else if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
const nums = [3, 2, 4];
let target = 6;

console.log(twoSum(nums, target));
