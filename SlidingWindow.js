var maxSlidingwindow = (nums, k) => {
  let deque = [];
  for (let i = 0; i < k; i++) {
    while (deque.length != 0 && deque[deque.length - 1] < nums[i]) {
      deque.pop();
    }
    deque.push(i);
  }
  ans.push(nums[deque[0]]);
  for (i = k; i <= nums.length; i++) {
    if (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }
    deque.push(i);
    ans.push(nums[deque[0]]);
  }
  return ans;
};
