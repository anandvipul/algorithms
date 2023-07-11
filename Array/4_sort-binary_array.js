// Given a binary array, in-place sort it in linear time and constant space. The output should contain all zeroes, followed by all ones.

// Input : [1, 0, 1, 0, 1, 0, 0, 1]
// Output: [0, 0, 0, 0, 1, 1, 1, 1]

// Input : [1, 1]
// Output: [1, 1]

function sortBinaryArray(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      count += 1;
    }
  }

  for (let j = 0; j < arr.length; j++) {
    if (j + 1 <= count) {
      arr[j] = 0;
    } else {
      arr[j] = 1;
    }
  }
  return arr;
}

console.log(sortBinaryArray([1, 0, 1, 0, 1, 0, 0, 1]));
