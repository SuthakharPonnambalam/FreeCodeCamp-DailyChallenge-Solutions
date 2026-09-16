//Date: September 14, 2026

/*
Given an array of integers from 1 to n, inclusive, return an array of all the missing integers between 1 and n (where n is the largest number in the given array).

The given array may be unsorted and may contain duplicates.
The returned array should be in ascending order.
If no integers are missing, return an empty array.
*/

function findMissingNumbers(arr) {
    arr = arr.sort((a,b) => a - b);
    let start = arr[0];
    let lastNum = arr[arr.length-1];
    let result = [];
    for(let i = start;i <=lastNum; i++){
        if(arr.includes(i)){
            continue;
        } else{
            result.push(i);
        }
    }
    return result;
}

console.log(findMissingNumbers([1, 3, 5]));
console.log(findMissingNumbers([1, 2, 3, 4, 5]));
console.log(findMissingNumbers([1, 10]));
console.log(findMissingNumbers([10, 1, 10, 1, 10, 1]));
console.log(findMissingNumbers([3, 1, 4, 1, 5, 9]));
console.log(findMissingNumbers([1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 6, 8, 9, 3, 2, 10, 7, 4]));