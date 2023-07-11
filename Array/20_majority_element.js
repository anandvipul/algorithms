// Given an integer array of size `n`, return the element which appears more than `n/2` times. Assume that the input always contain the majority element.

// Input : [2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2]
// Output: 2

// Input : [1, 3, 1, 1]
// Output: 1

function majorityElement(arr) {
  let hashElements = {};
  let majorityElement;
  for (let i = 0; i < arr.length; i++) {
    hashElements[`${arr[i]}`] !== undefined
      ? (hashElements[`${arr[i]}`] += 1)
      : (hashElements[`${arr[i]}`] = 1);
  }
  Object.keys(hashElements).forEach((elem) => {
    if (hashElements[elem] > Math.floor(arr.length / 2)) {
      majorityElement = elem;
    }
  });
  return majorityElement;
}

console.log(majorityElement([1, 3, 1, 1]));
