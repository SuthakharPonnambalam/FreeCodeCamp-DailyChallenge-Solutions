//Date: September 18, 2026

/*
Given an array of numbers, return a new array containing the value needed to get from each number to the next number.

For the last number, use 0 since there is no next number.
For example, given [1, 2, 4, 7], return [1, 2, 3, 0].
*/

function findDifferences(arr) {
    let result = [];
    let diff = 0;
    for(let i = 0; i < arr.length-1;i++){
        diff = arr[i+1] - arr[i];
        result.push(diff);
    }
    result.push(0);
    return result;
}

console.log(findDifferences([1, 2, 4, 7]));