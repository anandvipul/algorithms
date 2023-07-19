// Given two sorted integer arrays, merge them into a single array in decreasing order, and return it. In other words, merge two sorted arrays from their end.

// Input : X = [1, 3, 5], Y = [2, 6, 7, 10]
// Output: [10, 7, 6, 5, 3, 2, 1]

function sortedMergeArrays(arr1, arr2) {
  let leftIndex = 0;
  let rightIndex = 0;

  let resultArray = [];

  while (leftIndex < arr1.length && rightIndex < arr2.length) {
    if (arr1[leftIndex] < arr2[rightIndex]) {
      resultArray.unshift(arr1[leftIndex]);
      leftIndex++;
    } else if (arr1[leftIndex] > arr2[rightIndex]) {
      resultArray.unshift(arr2[rightIndex]);
      rightIndex++;
    } else {
      resultArray.unshift(arr1[leftIndex]);
      leftIndex++;
    }
  }

  while (leftIndex < arr1.length) {
    resultArray.unshift(arr1[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < arr2.length) {
    resultArray.unshift(arr2[rightIndex]);
    rightIndex++;
  }

  return resultArray;
}

console.log(sortedMergeArrays([1, 3, 5], [2, 6, 7, 10]));
