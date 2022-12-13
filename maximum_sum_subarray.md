# Maximum Sum Subarray
### Given an integer array, find the maximum sum among all its subarrays.

```
Input : [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6
Explanation: The maximum sum subarray is [4, -1, 2, 1]

Input : [-7, -3, -2, -4]
Output: -2
Explanation: The maximum sum subarray is [-2]

Input : [-2, 2, -1, 2, 1, 6, -10, 6, 4, -8]
Output: 10
Explanation: The maximum sum subarray is [2, -1, 2, 1, 6] or [6, 4] or [2, -1, 2, 1, 6, -10, 6, 4]
```
---

```js
function subArraySum(arr, indexStart, indexEnd) {
    let sum = 0;
    for (let i = indexStart; i <= indexEnd; i++) {
        sum += arr[i];
    }
    return sum;
}


// Initialize a sum array, [sum, startIndex, endIndex]
let sum = [0, 0, 0];
let input = [-2, 2, -1, 2, 1, 6, -10, 6, 4, -8];
// Initialize a nested loop
// Where n is the length of the array
// the outer loop i will parse from 0 to n-2 
// Initialize a temp sum variable
// Inner loop j will parse from i+1 to n-1 
for (let i = 0; i < input.length - 1; i ++) {
    // If temp sum is greater, replace sum with that value
    let tempSum = 0;
    for (let j = i+1; j <= input.length - 1; j ++) {
        if (subArraySum(input, i, j) > sum[0]) {
            sum[0] = subArraySum(input, i, j);
            sum[1] = i;
            sum[2] = j;
        } 
    }
}

console.log(sum);
```