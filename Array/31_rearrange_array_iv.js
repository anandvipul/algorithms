// Given an array of positive and negative integers, in-place segregate them in linear time and constant space. The output should contain all negative numbers, followed by all positive numbers.

// Input : [9, -3, 5, -2, -8, -6, 1, 3]
// Output: [-3, -2, -8, -6, 9, 5, 1, 3] or [-3, -2, -8, -6, 9, 5, 1, 3] or any other valid combination.

// Input : [-4, -2, -7, -9]
// Output: [-4, -2, -7, -9] or any other valid combination.

// Input : [2, 4, 3, 1, 5]
// Output: [2, 4, 3, 1, 5] or any other valid combination.

function rearrangeArry(arr) {
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < arr.length) {
    if (arr[leftIndex] > 0) {
      // swap
      for (let i = leftIndex + 1; i < arr.length; i++) {
        if (arr[i] < 0) {
          rightIndex = i;
        }
      }
      [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]];
      // increment leftIndex
      leftIndex++;
    }

    leftIndex++;
  }

  return arr;
}

console.log(rearrangeArry([-4, -2, -7, -9]));
