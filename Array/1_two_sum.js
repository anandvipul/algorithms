// Given an unsorted integer array, find a pair with the given sum in it.

// • Each input can have multiple solutions. The output should match with either one of them.

// Input : nums[] = [8, 7, 2, 5, 3, 1], target = 10
// Output: (8, 2) or (7, 3)

// • The solution can return pair in any order. If no pair with the given sum exists, the solution should return the pair (-1, -1).

// Input : nums[] = [5, 2, 6, 8, 1, 9], target = 12
// Output: (-1, -1)

// Solution 1: Using Brute Force
//Function to find a pair with target sum
function twoSum(arr, sum) {
  // Outer looping over the array
  for (let i = 0; i < arr.length; i++) {
    // current element
    let tempSum = arr[i];
    // Inner array for comparing the sum.
    for (let j = i + 1; j < arr.length; j++) {
      if (tempSum + arr[j] === sum) {
        // Returning the pair
        return [arr[i], arr[j]];
      }
    }
  }
  //   If pair not found return
  return [-1, -1];
}

console.log(twoSum([8, 7, 2, 5, 3, 1], 10));

// Solution 2: Using hash Table
//Function to find a pair with target sum
function findPair(arr, sum) {
  // Creating an empty object
  let dict = {};
  // Looping over each element
  for (let i in arr) {
    // checking if pair of current element exists
    if (dict.hasOwnProperty(sum - arr[i])) {
      // If the pair is found, return the pair
      return [arr[dict[sum - arr[i]]], arr[i]];
    }
    // storing the index of the current element as a property
    dict[arr[i]] = i;
  }
  // if no pair found print the pair
  return [-1, -1];
}

// Solution 3: Using Sorting algorithm
//Funcvtion to find a pair with target sum
function findPair(arr, sum) {
  // Sorting the array
  arr = arr.sort((a, b) => {
    return a - b;
  });
  // index variables initiallized on boundaries
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  // loop continues till both the indices meet
  while (leftIndex < rightIndex) {
    if (arr[leftIndex] + arr[rightIndex] === sum) {
      return [arr[leftIndex], arr[rightIndex]];
    } else if (arr[leftIndex] + arr[rightIndex] > sum) {
      rightIndex--;
    } else {
      leftIndex++;
    }
  }
  return [-1, -1];
}
