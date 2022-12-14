# Unbounded Search Sorted Array
### Given a monotonically increasing function f(x) on positive numbers, find the lowest positive integer x where f(x) > 0. In other words, find a positive number x such that f(i) > 0 for any integer i greater than or equal to x.

### A function is called monotonically increasing if f(x) <= f(y) is true for all x and y, where x <= y. For example,
```
Input: f(x) = 2x - 100
Output: 51
Explanation: f(x) becomes positive for the first time when x = 51.

Input: f(x) = 3x - 100
Output: 34
Explanation: f(x) becomes positive for the first time when x = 34.
```

---

```js
function f(x) {
    return 3*x - 100;
}

function binarySearch(low, high) {
    if (high < low) {
        return -1;
    }

    mid = low + Math.ceil((high - low)/2);

    if (f(mid) > 0) {
        if(mid == 0 || f(mid-1) <= 0) {
            return mid;
        }

        return binarySearch(low, mid-1);
    }
    return binarySearch(mid+1, high);


}

function exponentialSearch() {
    let i = 1;
    while (f(i) <= 0) {
        i *= 2;

    }
    return binarySearch(Math.ceil(i/2), i);
}

console.log(exponentialSearch());
```