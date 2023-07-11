// Given an integer array, find a pair with the maximum product in it.

// Each input can have multiple solutions. The output should match with either one of them.

// Input : [-10, -3, 5, 6, -2]
// Output: (-10, -3) or (-3, -10) or (5, 6) or (6, 5)

// Input : [-4, 3, 2, 7, -5]
// Output: (3, 7) or (7, 3)

// If no pair exists, the solution should return the pair (-1, -1).

// Input : [1]
// Output: (-1, -1)

function maxProduct(arr) {
  let product = -Infinity;
  let index1 = 0;
  let index2 = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i == j) {
        continue;
      }
      if (arr[i] * arr[j] > product) {
        product = arr[i] * arr[j];
        index1 = i;
        index2 = j;
      }
    }
  }
  return [arr[index1], arr[index2]];
}

console.log(maxProduct([-10, -3, 5, 6, -2]));
