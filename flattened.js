//Date: September 15, 2026

/*
Given an array, determine if it is flat.

An array is flat if none of its elements are arrays.
*/

function isFlat(arr) {
    for(let i = 0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            return false;
        }
    }
    return true;
}

console.log(isFlat([1, 2, 3, 4]));
console.log(isFlat([1, [2, 3], 4]));