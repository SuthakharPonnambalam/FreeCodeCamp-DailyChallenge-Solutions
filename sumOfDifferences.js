//Date: September 8, 2026

/*
Given an array of numbers, return the sum of the differences between each number and the one that follows it.

For example, given [1, 3, 4], return 3 (2 + 1).
*/

function sumOfDifferences(arr) {
    let sum = 0;
    for(let i = 0;i<arr.length-1;i++){
        let diff = arr[i+1] - arr[i];
        sum = sum + diff;
        //console.log(sum);
    }
    return sum;
}

console.log(sumOfDifferences([1, 3, 4]));
console.log(sumOfDifferences([9, 6, 15, -20, 33, 14, 25, 16, -7]));