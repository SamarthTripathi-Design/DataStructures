const peakElement = (arr, n) => {
  let peakelement;
  arr.forEach((ele, index) => {
    if (ele > ele[index - 1] || ele > ele[index + 1]) {
      peakelement = ele;
    }
  });
};

arr