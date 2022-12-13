# Given an integer array of size `n`, return the element which appears more than `n/2` times. Assume that the input always contain the majority element.

Input : [2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2]
Output: 2

Input : [1, 3, 1, 1]
Output: 1

let input = [2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2];
let uniq = {};

for (let elem of input) {
    if(elem in uniq) {
        uniq[elem] += 1;
    } else {
        uniq[elem] = 1;
    }
}

let max = 0;
let maxNumber = 0;
for ( let elem of uniq) {
    if ( uniq[elem] > maxNumber) {
        maxNumber = elem;
    }
} 

console.log(maxNumber);