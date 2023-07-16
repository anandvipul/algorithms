// Given an integer array, in-place move all zeros present in it to the end. The solution should maintain the relative order of items in the array and should not use constant space.

// Input : [6, 0, 8, 2, 3, 0, 4, 0, 1]
// Output: [6, 8, 2, 3, 4, 1, 0, 0, 0]

function moveZerosToEnd(arr) {
  let numberArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      numberArray.push(arr[i]);
    }
  }
  return numberArray.concat(new Array(arr.length - numberArray.length).fill(0));
}

console.log(moveZerosToEnd([6, 0, 8, 2, 3, 0, 4, 0, 1]));
