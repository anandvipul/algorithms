// Given a sorted integer array and a target, determine if the target exists in the array in logarithmic time. If target exists in the array, the procedure should return the index of it.

// Input: nums[] = [2, 3, 5, 7, 9], target = 7
// Output: 3
// Explanation: Element found at 4th (index 3) position

// • If there are duplicate elements in the array, the procedure may return any index whose element is equal to the target.

// Input: nums[] = [1, 2, 3, 4, 4, 5, 6, 7], target = 4
// Output: 3 (or 4)
// Explanation: Element found at the 4th (index 3) or 5th (index 4) position.

// • If the target is not located, the procedure should return -1.

// Input: nums[] = [1, 4, 5, 8, 9], target = 2
// Output: -1

function searchSortedArray(arr, target) {
  let targetIndex = 0;
  let midIndex = Math.floor(arr.length / 2);

  let count = 0;

  while (count < arr.length) {
    if (arr[midIndex] > target) {
      midIndex = Math.floor(midIndex / 2);
    } else if (arr[midIndex] < target) {
      midIndex = Math.floor((midIndex + arr.length) / 2);
    } else if (arr[midIndex] === target) {
      return midIndex;
    }
    count++;
  }
  return -1;
}

console.log(searchSortedArray([1, 1, 2, 3, 4, 4, 5, 6, 7], 1));
