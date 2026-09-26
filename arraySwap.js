//Date: September 22, 2026

/*
Given an array with two values, return an array with the values swapped.

For example, given ["A", "B"] return ["B", "A"].
*/

function arraySwap(arr) {
    let result = [];
    for(let i = arr.length-1; i >=0; i--){
        result.push(arr[i]);
    }
    return result;
}

console.log(arraySwap(["A", "B"]));