// Given two integer arrays, each of which is sorted in increasing order, merge them into a single array in increasing order, and return it.

// Input: X = [1, 3, 5, 7], Y = [2, 4, 6]
// Output: [1, 2, 3, 4, 5, 6, 7]

function mergeArrays(arr1, arr2) {
  let leftArrayIndex = 0;
  let rightArrayIndex = 0;
  let resultArray = [];

  while (leftArrayIndex < arr1.length && rightArrayIndex < arr2.length) {
    if (arr1[leftArrayIndex] < arr2[rightArrayIndex]) {
      resultArray.push(arr1[leftArrayIndex]);
      leftArrayIndex++;
    } else if (arr1[leftArrayIndex] > arr2[rightArrayIndex]) {
      resultArray.push(arr2[rightArrayIndex]);
      rightArrayIndex++;
    }
  }

  while (leftArrayIndex < arr1.length) {
    resultArray.push(arr1[leftArrayIndex]);
    leftArrayIndex++;
  }

  while (rightArrayIndex < arr2.length) {
    resultArray.push(arr2[rightArrayIndex]);
    rightArrayIndex++;
  }

  return resultArray;
}

console.log(mergeArrays([1, 3, 5, 7], [2, 4, 6]));
