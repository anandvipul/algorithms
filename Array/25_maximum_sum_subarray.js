// Given an integer array, find the maximum sum among all its subarrays.

// Input : [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// Explanation: The maximum sum subarray is [4, -1, 2, 1]

// Input : [-7, -3, -2, -4]
// Output: -2
// Explanation: The maximum sum subarray is [-2]

// Input : [-2, 2, -1, 2, 1, 6, -10, 6, 4, -8]
// Output: 10
// Explanation: The maximum sum subarray is [2, -1, 2, 1, 6] or [6, 4] or [2, -1, 2, 1, 6, -10, 6, 4]

function maximumSumSubArray(arr) {
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let tempSum = arr.slice(i, j).reduce((total, item) => {
        return total + item;
      }, 0);
      if (tempSum > maxSum) {
        maxSum = tempSum;
      }
    }
  }
  return maxSum;
}

console.log(maximumSumSubArray([-2, 2, -1, 2, 1, 6, -10, 6, 4, -8]));
