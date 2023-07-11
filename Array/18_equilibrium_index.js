// Given an integer array, return all equilibrium index in it. For an array `A[0..n-1]`, index `i` is an equilibrium index if the sum of elements of subarray `A[0…i-1]` is equal to the sum of elements of subarray `A[i+1…n-1]`.

// Input : [0, -3, 5, -4, -2, 3, 1, 0]
// Output: {0, 3, 7}
// Explanation: For each index `i` in the output, A[0] + A[1] + … + A[i-1] = A[i+1] + A[i+2] + … + A[n-1]

// Input : [-7, 3, 7, -3, 1]
// Output: {4}
// Explanation: `n-1` is an equilibrium index if A[0] + A[1] + … + A[n-2] sums to 0.

// Input : [1, 2, -4, 2]
// Output: {0}
// Explanation: 0 is an equilibrium index if A[1] + A[2] + … + A[n-1] sums to 0.

function equilibriumIndex(arr) {
  let leftSum = 0;
  let rightSum = 0;
  let resArr = [];
  for (let i = 0; i < arr.length; i++) {
    leftSum = arr.slice(0, i).reduce((total, item) => {
      return total + item;
    }, 0);
    rightSum = arr.slice(i + 1, arr.length).reduce((total, item) => {
      return total + item;
    }, 0);
    if (leftSum === rightSum) {
      resArr.push(i);
    }
    // console.log(leftSum, rightSum, `1 => ${i}`);
  }

  return resArr;
}

console.log(equilibriumIndex([-7, 3, 7, -3, 1]));
